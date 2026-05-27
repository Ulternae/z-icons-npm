import React from 'react';

export interface CoreShareNodesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShareNodes: React.FC<CoreShareNodesProps>;
export default CoreShareNodes;
