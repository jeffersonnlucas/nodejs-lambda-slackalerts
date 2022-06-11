'use strict';
import AWS from 'aws-sdk';
import url from 'url';
import https from 'https';
import util from 'util';
import p from 'phin';

const reqURL = process.env.HookUrl;

async function sendToSlack() {

  const message = {
    'channel': 'Channel',
    'username': 'userName',
    'text': 'Initial Text',
    'icon_emoji': ':aws:',
    'attachments': [{
      'color': '#8697db',
      'fields': [
        {
          'title': 'Title Message',
          'value': 'Value',
          'short': true
        }
      ]
    }]
  };

  return p({
    url: reqURL,
    method: 'POST',
    data: message
  });
}

export async function hello(event, context, callback) {
  return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
