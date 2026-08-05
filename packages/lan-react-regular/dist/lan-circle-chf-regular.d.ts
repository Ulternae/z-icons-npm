import React from 'react';

export interface LanCircleChfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleChfRegular(props: LanCircleChfRegularProps): React.ReactElement;
export default LanCircleChfRegular;
