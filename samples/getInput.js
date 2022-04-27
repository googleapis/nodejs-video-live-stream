/**
 * Copyright 2022, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

function main(projectNumber, location, inputId) {
  // [START livestream_get_input]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // projectNumber = '012345678';
  // location = 'us-central1';
  // inputId = 'my-input';

  // Imports the Livestream library
  const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

  // Instantiates a client
  const livestreamServiceClient = new LivestreamServiceClient();

  async function getInput() {
    // Construct request
    const request = {
      name: livestreamServiceClient.inputPath(projectNumber, location, inputId),
    };
    const [input] = await livestreamServiceClient.getInput(request);
    console.log(`Input: ${input.name}`);
  }

  getInput();
  // [END livestream_get_input]
}

// node getInput.js <projectNumber> <location> <inputId>
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
