import React from 'react';

export interface LanGrid2PlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid2PlusRegular: React.FC<LanGrid2PlusRegularProps>;
export default LanGrid2PlusRegular;
