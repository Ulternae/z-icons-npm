import React from 'react';

export interface LanWaterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaterRegular: React.FC<LanWaterRegularProps>;
export default LanWaterRegular;
