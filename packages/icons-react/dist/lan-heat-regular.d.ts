import React from 'react';

export interface LanHeatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeatRegular: React.FC<LanHeatRegularProps>;
export default LanHeatRegular;
