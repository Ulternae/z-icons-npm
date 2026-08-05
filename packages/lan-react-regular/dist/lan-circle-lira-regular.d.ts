import React from 'react';

export interface LanCircleLiraRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleLiraRegular(props: LanCircleLiraRegularProps): React.ReactElement;
export default LanCircleLiraRegular;
