import React from 'react';

export interface LanCircleEuroRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEuroRegular(props: LanCircleEuroRegularProps): React.ReactElement;
export default LanCircleEuroRegular;
