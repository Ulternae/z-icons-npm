import React from 'react';

export interface LanObjectSubtractRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectSubtractRegular(props: LanObjectSubtractRegularProps): React.ReactElement;
export default LanObjectSubtractRegular;
