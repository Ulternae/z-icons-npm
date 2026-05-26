import React from 'react';

export interface LanCircleShareNodesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleShareNodes: React.FC<LanCircleShareNodesProps>;
export default LanCircleShareNodes;
