import React from 'react';

export interface LanMoonStarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonStarRegular(props: LanMoonStarRegularProps): React.ReactElement;
export default LanMoonStarRegular;
