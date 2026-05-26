import React from 'react';

export interface LanSolarSystemProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSolarSystem: React.FC<LanSolarSystemProps>;
export default LanSolarSystem;
