import React from 'react';

export interface LanObjectSubtractThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectSubtractThin(props: LanObjectSubtractThinProps): React.ReactElement;
export default LanObjectSubtractThin;
