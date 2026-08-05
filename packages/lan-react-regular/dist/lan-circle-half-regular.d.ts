import React from 'react';

export interface LanCircleHalfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHalfRegular(props: LanCircleHalfRegularProps): React.ReactElement;
export default LanCircleHalfRegular;
