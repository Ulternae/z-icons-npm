import React from 'react';

export interface LanSignHangingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignHanging(props: LanSignHangingProps): React.ReactElement;
export default LanSignHanging;
