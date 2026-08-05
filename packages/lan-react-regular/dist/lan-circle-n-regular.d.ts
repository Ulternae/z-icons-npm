import React from 'react';

export interface LanCircleNRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleNRegular(props: LanCircleNRegularProps): React.ReactElement;
export default LanCircleNRegular;
