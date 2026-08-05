import React from 'react';

export interface LanEarthAmericaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarthAmericaRegular(props: LanEarthAmericaRegularProps): React.ReactElement;
export default LanEarthAmericaRegular;
