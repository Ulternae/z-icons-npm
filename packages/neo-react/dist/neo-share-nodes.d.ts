import React from 'react';

export interface NeoShareNodesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoShareNodes(props: NeoShareNodesProps): React.ReactElement;
export default NeoShareNodes;
