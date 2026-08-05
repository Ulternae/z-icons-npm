import React from 'react';

export interface LanCabinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCabinRegular(props: LanCabinRegularProps): React.ReactElement;
export default LanCabinRegular;
