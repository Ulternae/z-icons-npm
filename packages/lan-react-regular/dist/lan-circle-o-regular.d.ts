import React from 'react';

export interface LanCircleORegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleORegular(props: LanCircleORegularProps): React.ReactElement;
export default LanCircleORegular;
