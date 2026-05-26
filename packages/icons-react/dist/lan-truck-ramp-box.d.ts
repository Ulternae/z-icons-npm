import React from 'react';

export interface LanTruckRampBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckRampBox: React.FC<LanTruckRampBoxProps>;
export default LanTruckRampBox;
