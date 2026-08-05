import React from 'react';

export interface LanEarthEuropeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarthEurope(props: LanEarthEuropeProps): React.ReactElement;
export default LanEarthEurope;
