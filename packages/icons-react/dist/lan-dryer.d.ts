import React from 'react';

export interface LanDryerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDryer: React.FC<LanDryerProps>;
export default LanDryer;
