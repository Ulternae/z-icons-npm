import React from 'react';

export interface LanTreeCityThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeCityThin(props: LanTreeCityThinProps): React.ReactElement;
export default LanTreeCityThin;
