import React from 'react';

export interface LanCircleVRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleVRegular(props: LanCircleVRegularProps): React.ReactElement;
export default LanCircleVRegular;
