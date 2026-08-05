import React from 'react';

export interface LanCircleXRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleXRegular(props: LanCircleXRegularProps): React.ReactElement;
export default LanCircleXRegular;
