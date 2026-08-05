import React from 'react';

export interface LanTreeCityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeCity(props: LanTreeCityProps): React.ReactElement;
export default LanTreeCity;
