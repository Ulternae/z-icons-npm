import React from 'react';

export interface LanEarthOceaniaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarthOceania: React.FC<LanEarthOceaniaProps>;
export default LanEarthOceania;
