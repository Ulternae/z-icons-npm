import React from 'react';

export interface LanCityThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCityThin(props: LanCityThinProps): React.ReactElement;
export default LanCityThin;
