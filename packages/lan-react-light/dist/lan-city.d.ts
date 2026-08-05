import React from 'react';

export interface LanCityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCity(props: LanCityProps): React.ReactElement;
export default LanCity;
