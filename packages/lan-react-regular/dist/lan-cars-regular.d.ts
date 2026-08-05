import React from 'react';

export interface LanCarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarsRegular(props: LanCarsRegularProps): React.ReactElement;
export default LanCarsRegular;
