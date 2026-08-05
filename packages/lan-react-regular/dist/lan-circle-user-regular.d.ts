import React from 'react';

export interface LanCircleUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleUserRegular(props: LanCircleUserRegularProps): React.ReactElement;
export default LanCircleUserRegular;
