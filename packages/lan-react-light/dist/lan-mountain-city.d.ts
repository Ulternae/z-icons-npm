import React from 'react';

export interface LanMountainCityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMountainCity(props: LanMountainCityProps): React.ReactElement;
export default LanMountainCity;
