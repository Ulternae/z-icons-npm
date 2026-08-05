import React from 'react';

export interface LanCircleStarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleStarRegular(props: LanCircleStarRegularProps): React.ReactElement;
export default LanCircleStarRegular;
