// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(name) {
  // [START livestream_v1_generated_LivestreamService_DeleteChannel_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the channel resource, in the form of:
   *  `projects/{project}/locations/{location}/channels/{channelId}`.
   */
  // const name = 'abc123'
  /**
   *  A request ID to identify requests. Specify a unique request ID
   *  so that if you must retry your request, the server will know to ignore
   *  the request if it has already been completed. The server will guarantee
   *  that for at least 60 minutes after the first request.
   *  For example, consider a situation where you make an initial request and the
   *  request times out. If you make the request again with the same request ID,
   *  the server can check if original operation with the same request ID was
   *  received, and if so, will ignore the second request. This prevents clients
   *  from accidentally creating duplicate commitments.
   *  The request ID must be a valid UUID with the exception that zero UUID is
   *  not supported `(00000000-0000-0000-0000-000000000000)`.
   */
  // const requestId = 'abc123'
  /**
   *  If the `force` field is set to the default value of `false`, you must
   *  delete all of a channel's events before you can delete the channel itself.
   *  If the field is set to `true`, requests to delete a channel also delete
   *  associated channel events.
   */
  // const force = true

  // Imports the Livestream library
  const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

  // Instantiates a client
  const livestreamClient = new LivestreamServiceClient();

  async function callDeleteChannel() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await livestreamClient.deleteChannel(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callDeleteChannel();
  // [END livestream_v1_generated_LivestreamService_DeleteChannel_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));