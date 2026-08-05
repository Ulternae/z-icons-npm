import React from 'react';

export interface LanEarthAmericaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarthAmerica(props: LanEarthAmericaProps): React.ReactElement;
export default LanEarthAmerica;
