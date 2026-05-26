import React from 'react';

export interface LanCircleNodesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleNodesRegular: React.FC<LanCircleNodesRegularProps>;
export default LanCircleNodesRegular;
