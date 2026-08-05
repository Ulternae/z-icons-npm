import React from 'react';

export interface LanEarthOceaniaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarthOceania(props: LanEarthOceaniaProps): React.ReactElement;
export default LanEarthOceania;
