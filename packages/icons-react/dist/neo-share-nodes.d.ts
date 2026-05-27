import React from 'react';

export interface NeoShareNodesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoShareNodes: React.FC<NeoShareNodesProps>;
export default NeoShareNodes;
