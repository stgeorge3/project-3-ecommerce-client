'use strict'

const config = require('../config')
const store = require('../store')

const createOrder = (data) => {
  console.log(data)
  console.log('createOrder api function reached!')
  return $.ajax({
    url: config.apiOrigin + '/orders/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getOrder = () => {
  // console.log('getOrders api function reached!')
  return $.ajax({
    url: config.apiOrigin + '/orders/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateOrder = (data) => {
  console.log('updateOrder api function reached!')
  return $.ajax({
    url: config.apiOrigin + '/orders/' + data.order.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteOrder = (id) => {
  console.log('deleteOrder api function reached!')
  return $.ajax({ // return ajax then set up, url, method, data
    url: config.apiOrigin + '/orders/' + id,
    method: 'DELETE',
    // add Token
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createOrder,
  updateOrder,
  getOrder,
  deleteOrder
}
