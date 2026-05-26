import React from 'react';

export interface LanMasksTheaterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMasksTheaterRegular: React.FC<LanMasksTheaterRegularProps>;
export default LanMasksTheaterRegular;
