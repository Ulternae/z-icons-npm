import React from 'react';

export interface LanObjectSubtractProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectSubtract(props: LanObjectSubtractProps): React.ReactElement;
export default LanObjectSubtract;
