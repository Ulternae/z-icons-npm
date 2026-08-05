import React from 'react';

export interface LanCircleARegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleARegular(props: LanCircleARegularProps): React.ReactElement;
export default LanCircleARegular;
