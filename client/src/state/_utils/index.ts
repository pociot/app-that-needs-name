import {Action, Reducer} from 'redux';

type THandler<S, T> = (state: S, action: T) => Partial<S>
type TActionCreator<T> = (payload: T) => ({
  type: string,
  payload: T
})

interface IReduxStandardAction extends Action {
  type: string
  payload: object
}

const identity = <T>(x: T): T => x

const actionTypeIndex = {}

export const makeReduxDuck = <S>(
    prefix: string,
    initialState: S
): {
  getReducer: () => Reducer<S>,
  defineAction: <T extends object>(
      actionType: string,
      handler: THandler<S, T>
  ) => TActionCreator<T>
} => {

  const actionHandlers = {}

  return {
    getReducer: () => (state = initialState, action: IReduxStandardAction): S => Object.assign(
        {},
        state,
        (actionHandlers[action.type] || identity)(state, action.payload)
    ),
    defineAction: (actionType, handler) => {
      const type = `${prefix}/${actionType}`

      if (actionTypeIndex[type] === true) {
        throw new Error(`Duplicate action type: ${type}`)
      }

      actionTypeIndex[type] = true
      actionHandlers[type] = handler

      return (payload) => ({
        type,
        payload
      })
    }
  }
}