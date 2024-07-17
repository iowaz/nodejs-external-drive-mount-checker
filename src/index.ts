import "reflect-metadata";

import fastify from 'fastify';
import { DockerStatsInterface } from './interfaces/docker-inspect.interface';
import util from 'util';
import { exec as execWithCallback } from 'child_process';
import { container } from 'tsyringe';
import { MountFixController } from './controllers/mount-fix.controller';

const exec = util.promisify(execWithCallback);

const server = fastify();

server.get('/ping', async (request, reply) => {
  console.log(request);
  console.log(reply);
  return 'pong\n';
});

server.post('/mount-fix', async (request, reply) => {
  const controller: MountFixController = container.resolve(MountFixController);
  return controller.postMountFix(request, reply);
});

server.listen({ port: 9999, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

// Example usage
const input =
  'Wiphy phy0\n' +
  '        wiphy index: 0\n' +
  '        max # scan SSIDs: 10\n' +
  '        max scan IEs length: 2048 bytes\n' +
  '        max # sched scan SSIDs: 0\n' +
  '        max # match sets: 0\n' +
  '        Retry short limit: 7\n' +
  '        Retry long limit: 4\n' +
  '        Coverage class: 0 (up to 0m)\n' +
  '        Device supports roaming.\n' +
  '        Device supports T-DLS.\n' +
  '        Supported Ciphers:\n' +
  '                * WEP40 (00-0f-ac:1)\n' +
  '                * WEP104 (00-0f-ac:5)\n' +
  '                * TKIP (00-0f-ac:2)\n' +
  '                * CCMP-128 (00-0f-ac:4)\n' +
  '                * CMAC (00-0f-ac:6)\n' +
  '        Available Antennas: TX 0 RX 0\n' +
  '        Supported interface modes:\n' +
  '                 * IBSS\n' +
  '                 * managed\n' +
  '                 * AP\n' +
  '                 * P2P-client\n' +
  '                 * P2P-GO\n' +
  '                 * P2P-device\n' +
  '        Band 1:\n' +
  '                Capabilities: 0x1062\n' +
  '                        HT20/HT40\n' +
  '                        Static SM Power Save\n' +
  '                        RX HT20 SGI\n' +
  '                        RX HT40 SGI\n' +
  '                        No RX STBC\n' +
  '                        Max AMSDU length: 3839 bytes\n' +
  '                        DSSS/CCK HT40\n' +
  '                Maximum RX AMPDU length 65535 bytes (exponent: 0x003)\n' +
  '                Minimum RX AMPDU time spacing: 16 usec (0x07)\n' +
  '                HT TX/RX MCS rate indexes supported: 0-23\n' +
  '                Bitrates (non-HT):\n' +
  '                        * 1.0 Mbps\n' +
  '                        * 2.0 Mbps (short preamble supported)\n' +
  '                        * 5.5 Mbps (short preamble supported)\n' +
  '                        * 11.0 Mbps (short preamble supported)\n' +
  '                        * 6.0 Mbps\n' +
  '                        * 9.0 Mbps\n' +
  '                        * 12.0 Mbps\n' +
  '                        * 18.0 Mbps\n' +
  '                        * 24.0 Mbps\n' +
  '                        * 36.0 Mbps\n' +
  '                        * 48.0 Mbps\n' +
  '                        * 54.0 Mbps\n' +
  '                Frequencies:\n' +
  '                        * 2412.0 MHz [1] (20.0 dBm)\n' +
  '                        * 2417.0 MHz [2] (20.0 dBm)\n' +
  '                        * 2422.0 MHz [3] (20.0 dBm)\n' +
  '                        * 2427.0 MHz [4] (20.0 dBm)\n' +
  '                        * 2432.0 MHz [5] (20.0 dBm)\n' +
  '                        * 2437.0 MHz [6] (20.0 dBm)\n' +
  '                        * 2442.0 MHz [7] (20.0 dBm)\n' +
  '                        * 2447.0 MHz [8] (20.0 dBm)\n' +
  '                        * 2452.0 MHz [9] (20.0 dBm)\n' +
  '                        * 2457.0 MHz [10] (20.0 dBm)\n' +
  '                        * 2462.0 MHz [11] (20.0 dBm)\n' +
  '                        * 2467.0 MHz [12] (disabled)\n' +
  '                        * 2472.0 MHz [13] (disabled)\n' +
  '                        * 2484.0 MHz [14] (disabled)\n' +
  '        Band 2:\n' +
  '                Capabilities: 0x1062\n' +
  '                        HT20/HT40\n' +
  '                        Static SM Power Save\n' +
  '                        RX HT20 SGI\n' +
  '                        RX HT40 SGI\n' +
  '                        No RX STBC\n' +
  '                        Max AMSDU length: 3839 bytes\n' +
  '                        DSSS/CCK HT40\n' +
  '                Maximum RX AMPDU length 65535 bytes (exponent: 0x003)\n' +
  '                Minimum RX AMPDU time spacing: 16 usec (0x07)\n' +
  '                HT TX/RX MCS rate indexes supported: 0-23\n' +
  '                VHT Capabilities (0x0c025820):\n' +
  '                        Max MPDU length: 3895\n' +
  '                        Supported Channel Width: neither 160 nor 80+80\n' +
  '                        short GI (80 MHz)\n' +
  '                        SU Beamformer\n' +
  '                        SU Beamformee\n' +
  '                VHT RX MCS set:\n' +
  '                        1 streams: MCS 0-9\n' +
  '                        2 streams: MCS 0-9\n' +
  '                        3 streams: MCS 0-9\n' +
  '                        4 streams: not supported\n' +
  '                        5 streams: not supported\n' +
  '                        6 streams: not supported\n' +
  '                        7 streams: not supported\n' +
  '                        8 streams: not supported\n' +
  '                VHT RX highest supported: 0 Mbps\n' +
  '                VHT TX MCS set:\n' +
  '                        1 streams: MCS 0-9\n' +
  '                        2 streams: MCS 0-9\n' +
  '                        3 streams: MCS 0-9\n' +
  '                        4 streams: not supported\n' +
  '                        5 streams: not supported\n' +
  '                        6 streams: not supported\n' +
  '                        7 streams: not supported\n' +
  '                        8 streams: not supported\n' +
  '                VHT TX highest supported: 0 Mbps\n' +
  '                VHT extended NSS: not supported\n' +
  '                Bitrates (non-HT):\n' +
  '                        * 6.0 Mbps\n' +
  '                        * 9.0 Mbps\n' +
  '                        * 12.0 Mbps\n' +
  '                        * 18.0 Mbps\n' +
  '                        * 24.0 Mbps\n' +
  '                        * 36.0 Mbps\n' +
  '                        * 48.0 Mbps\n' +
  '                        * 54.0 Mbps\n' +
  '                Frequencies:\n' +
  '                        * 5170.0 MHz [34] (disabled)\n' +
  '                        * 5180.0 MHz [36] (20.0 dBm)\n' +
  '                        * 5190.0 MHz [38] (disabled)\n' +
  '                        * 5200.0 MHz [40] (20.0 dBm)\n' +
  '                        * 5210.0 MHz [42] (disabled)\n' +
  '                        * 5220.0 MHz [44] (20.0 dBm)\n' +
  '                        * 5230.0 MHz [46] (disabled)\n' +
  '                        * 5240.0 MHz [48] (20.0 dBm)\n' +
  '                        * 5260.0 MHz [52] (20.0 dBm) (no IR, radar detection)\n' +
  '                        * 5280.0 MHz [56] (20.0 dBm) (no IR, radar detection)\n' +
  '                        * 5300.0 MHz [60] (20.0 dBm) (no IR, radar detection)\n' +
  '                        * 5320.0 MHz [64] (20.0 dBm) (no IR, radar detection)\n' +
  '                        * 5500.0 MHz [100] (20.0 dBm) (no IR, radar detection)\n' +
  '                        * 5520.0 MHz [104] (20.0 dBm) (no IR, radar detection)\n' +
  '                        * 5540.0 MHz [108] (20.0 dBm) (no IR, radar detection)\n' +
  '                        * 5560.0 MHz [112] (20.0 dBm) (no IR, radar detection)\n' +
  '                        * 5580.0 MHz [116] (20.0 dBm) (no IR, radar detection)\n' +
  '                        * 5600.0 MHz [120] (20.0 dBm) (no IR, radar detection)\n' +
  '                        * 5620.0 MHz [124] (20.0 dBm) (no IR, radar detection)\n' +
  '                        * 5640.0 MHz [128] (20.0 dBm) (no IR, radar detection)\n' +
  '                        * 5660.0 MHz [132] (20.0 dBm) (no IR, radar detection)\n' +
  '                        * 5680.0 MHz [136] (20.0 dBm) (no IR, radar detection)\n' +
  '                        * 5700.0 MHz [140] (20.0 dBm) (no IR, radar detection)\n' +
  '                        * 5720.0 MHz [144] (20.0 dBm) (no IR, radar detection)\n' +
  '                        * 5745.0 MHz [149] (20.0 dBm)\n' +
  '                        * 5765.0 MHz [153] (20.0 dBm)\n' +
  '                        * 5785.0 MHz [157] (20.0 dBm)\n' +
  '                        * 5805.0 MHz [161] (20.0 dBm)\n' +
  '                        * 5825.0 MHz [165] (20.0 dBm)\n' +
  '        Supported commands:\n' +
  '                 * new_interface\n' +
  '                 * set_interface\n' +
  '                 * new_key\n' +
  '                 * start_ap\n' +
  '                 * join_ibss\n' +
  '                 * set_pmksa\n' +
  '                 * del_pmksa\n' +
  '                 * flush_pmksa\n' +
  '                 * remain_on_channel\n' +
  '                 * frame\n' +
  '                 * set_wiphy_netns\n' +
  '                 * set_channel\n' +
  '                 * tdls_oper\n' +
  '                 * start_p2p_device\n' +
  '                 * connect\n' +
  '                 * disconnect\n' +
  '                 * crit_protocol_start\n' +
  '                 * crit_protocol_stop\n' +
  '                 * update_connect_params\n' +
  '        WoWLAN support:\n' +
  '                 * wake up on disconnect\n' +
  '                 * wake up on magic packet\n' +
  '                 * wake up on pattern match, up to 16 patterns of 1-128 bytes,\n' +
  '                   maximum packet offset 1500 bytes\n' +
  '        software interface modes (can always be added):\n' +
  '        valid interface combinations:\n' +
  '                 * #{ managed } <= 2, #{ P2P-device } <= 1, #{ P2P-client, P2P-GO } <= 1,\n' +
  '                   total <= 3, #channels <= 2\n' +
  '                 * #{ managed } <= 1, #{ AP } <= 1, #{ P2P-client } <= 1, #{ P2P-device } <= 1,\n' +
  '                   total <= 4, #channels <= 1\n' +
  '        Device supports scan flush.\n' +
  '        max # scan plans: 1\n' +
  '        max scan plan interval: -1\n' +
  '        max scan plan iterations: 0\n' +
  '        Supported TX frame types:\n' +
  '                 * managed: 0x00 0x10 0x20 0x30 0x40 0x50 0x60 0x70 0x80 0x90 0xa0 0xb0 0xc0 0xd0 0xe0 0xf0\n' +
  '                 * AP: 0x00 0x10 0x20 0x30 0x40 0x50 0x60 0x70 0x80 0x90 0xa0 0xb0 0xc0 0xd0 0xe0 0xf0\n' +
  '                 * P2P-client: 0x00 0x10 0x20 0x30 0x40 0x50 0x60 0x70 0x80 0x90 0xa0 0xb0 0xc0 0xd0 0xe0 0xf0\n' +
  '                 * P2P-GO: 0x00 0x10 0x20 0x30 0x40 0x50 0x60 0x70 0x80 0x90 0xa0 0xb0 0xc0 0xd0 0xe0 0xf0\n' +
  '                 * P2P-device: 0x00 0x10 0x20 0x30 0x40 0x50 0x60 0x70 0x80 0x90 0xa0 0xb0 0xc0 0xd0 0xe0 0xf0\n' +
  '        Supported RX frame types:\n' +
  '                 * managed: 0x40 0xd0\n' +
  '                 * AP: 0x00 0x20 0x40 0xa0 0xb0 0xc0 0xd0\n' +
  '                 * P2P-client: 0x40 0xd0\n' +
  '                 * P2P-GO: 0x00 0x20 0x40 0xa0 0xb0 0xc0 0xd0\n' +
  '                 * P2P-device: 0x40 0xd0\n' +
  '        Supported extended features:\n' +
  '                * [ CQM_RSSI_LIST ]: multiple CQM_RSSI_THOLD records\n' +
  '                * [ 4WAY_HANDSHAKE_STA_PSK ]: 4-way handshake with PSK in station mode\n' +
  '                * [ 4WAY_HANDSHAKE_STA_1X ]: 4-way handshake with 802.1X in station mode\n' +
  '                * [ DFS_OFFLOAD ]: DFS offload';
// each space: 8
// function countLeadingSpaces(str: string) {
//   const match = str.match(/^ */);
//   return match ? match[0].length : 0;
// }
//
// function closestMultipleOf8(number: number) {
//   // Calculate the nearest multiple of 8 below and above the given number
//   const below = Math.floor(number / 8) * 8;
//   const above = below + 8;
//
//   // Determine which one is closer to the given number
//   if (number - below < above - number) {
//     return below;
//   } else {
//     return above;
//   }
// }
//
// interface Extractable {
//   name: string;
//   properties: { [key: string]: any };
//   children: Extractable[];
// }
//
// interface ExtractablePart2 {
//   name: string;
//   value?: string;
//   children?: ExtractablePart2[];
//   type: 'PROPERTY' | 'FATHER';
// }
//
// const lines = input.split('\n');
// let currentLevel: Extractable = { name: 'ROOT', children: [], properties: {} }; // Root object
// let stack: Extractable[] = [currentLevel]; // Stack to keep track of parent nodes
//
// lines.forEach((line) => {
//   const leadingSpaces = countLeadingSpaces(line);
//   const leadingSpacesBy8 = closestMultipleOf8(leadingSpaces);
//   const depth = leadingSpacesBy8 / 8;
//   const nodeName = line.trim();
//
//   const newNode = { name: nodeName, children: [], properties: {} };
//
//   if (depth > 0) {
//     stack[depth - 1].children.push(newNode); // Add as child of the parent node at previous depth
//   } else {
//     stack = [newNode]; // Reset stack for root node
//     currentLevel = newNode; // Update root node
//   }
//
//   stack[depth] = newNode; // Push current node to stack
// });
//
// // now lets clean the object
// function cleanChildren(current: Extractable): ExtractablePart2 {
//   if (current.children.length === 0) {
//     const splitCurrentName = current.name.split(': ');
//     return {
//       name: splitCurrentName.length > 0 ? splitCurrentName[0] : current.name,
//       type: 'PROPERTY',
//       value: splitCurrentName.length > 0 ? splitCurrentName[1] : undefined,
//     };
//   } else {
//     return {
//       name: current.name.split(':')[0],
//       type: 'FATHER',
//       children: current.children?.map((child) => cleanChildren(child)),
//     };
//   }
// }
//
// function cleanChildrenWithOnlyProperty(current: ExtractablePart2): ExtractablePart2 {
//   if (current.type === 'PROPERTY') {
//     return current;
//   } else {
//     const childrenTypeProperty = current.children?.filter((child) => child.type === 'PROPERTY');
//     if (childrenTypeProperty?.length === current.children?.length) {
//       // only properties
//       // current
//     }
//   }
// }
//
// console.log(currentLevel);
// const cleanChildrenn = cleanChildren(currentLevel);
// console.log(cleanChildrenn);
