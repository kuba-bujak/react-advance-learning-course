import reducer from './reducer'

describe('reduktor', () => {
  it('powinien móc przesunąc kafelek w dół, jeśli pod nim jest puste miejsce', () => {
    let state = {
      items: ['1', '2', '3', null, '5', '6', '7', '8', '4'],
    }

    state = reducer(state, { type: 'move', payload: 0 })

    expect(state.items).toEqual([
      null,
      '2',
      '3',
      '1',
      '5',
      '6',
      '7',
      '8',
      '4',
    ])
  })

  it('powinien poinformować kiedy gra zostanie zakończona', () => {
    let state = {
      items: ['1', '2', '3', '4', '5', '6', '7', null, '8'],
    }

    state = reducer(state, { type: 'move', payload: 8 })

    expect(state.complete).toBe(true)

    state = reducer(state, { type: 'move', payload: 5 })

    expect(state.complete).toBe(false)
  })
})
