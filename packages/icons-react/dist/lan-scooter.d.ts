import React from 'react';

export interface LanScooterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScooter: React.FC<LanScooterProps>;
export default LanScooter;
