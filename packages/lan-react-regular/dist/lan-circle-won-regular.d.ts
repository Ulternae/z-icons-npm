import React from 'react';

export interface LanCircleWonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleWonRegular(props: LanCircleWonRegularProps): React.ReactElement;
export default LanCircleWonRegular;
