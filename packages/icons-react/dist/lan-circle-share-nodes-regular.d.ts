import React from 'react';

export interface LanCircleShareNodesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleShareNodesRegular: React.FC<LanCircleShareNodesRegularProps>;
export default LanCircleShareNodesRegular;
