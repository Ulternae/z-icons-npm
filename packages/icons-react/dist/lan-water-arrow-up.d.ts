import React from 'react';

export interface LanWaterArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaterArrowUp: React.FC<LanWaterArrowUpProps>;
export default LanWaterArrowUp;
