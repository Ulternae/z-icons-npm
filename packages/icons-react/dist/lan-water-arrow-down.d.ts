import React from 'react';

export interface LanWaterArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaterArrowDown: React.FC<LanWaterArrowDownProps>;
export default LanWaterArrowDown;
