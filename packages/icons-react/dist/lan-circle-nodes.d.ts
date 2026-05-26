import React from 'react';

export interface LanCircleNodesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleNodes: React.FC<LanCircleNodesProps>;
export default LanCircleNodes;
