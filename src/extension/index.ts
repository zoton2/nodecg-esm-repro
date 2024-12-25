import type NodeCG from '@nodecg/types';

// If using "type": "commonjs", you need to use "NodeCG.ServerAPI".
// If using "type": "module", you need to use "NodeCG.default.ServerAPI".
export default async (nodecg: NodeCG.default.ServerAPI) => {
  nodecg.log.info('bundle working');
};

// Error if using "commonjs" but defining type as "NodeCG.default.ServerAPI":
// Namespace '".../nodecg-esm-repro/node_modules/@nodecg/types/types/nodecg".NodeCG' has no exported member 'default'.
// Note that this targets the "./types/nodecg" file, even though said file wouldn't contain the ServerAPI definition anyway.

// Error if using "module" but defining type as "NodeCG.ServerAPI":
// Namespace '".../nodecg-esm-repro/node_modules/@nodecg/types/index"' has no exported member 'ServerAPI'.
// Note that this targets the "./index" file.
