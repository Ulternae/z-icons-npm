import React from 'react';

export interface LanWaterTempRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaterTempRegular: React.FC<LanWaterTempRegularProps>;
export default LanWaterTempRegular;
