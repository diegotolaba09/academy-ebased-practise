const { batchEventMapper } = require('ebased/handler');
const inputMode = require('ebased/handler/input/batchEventQueue');
const outputMode = require('ebased/handler/output/batchEventConfirmation');
const { createGiftDomain } = require('../domain/createGift');

exports.handler = async (events, context) => {
    return batchEventMapper({ events, context }, inputMode, createGiftDomain, outputMode);
};