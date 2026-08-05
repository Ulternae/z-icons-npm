import React from 'react';

export interface LanEarthEuropeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarthEuropeRegular(props: LanEarthEuropeRegularProps): React.ReactElement;
export default LanEarthEuropeRegular;
