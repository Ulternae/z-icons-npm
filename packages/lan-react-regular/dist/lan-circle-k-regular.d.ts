import React from 'react';

export interface LanCircleKRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleKRegular(props: LanCircleKRegularProps): React.ReactElement;
export default LanCircleKRegular;
