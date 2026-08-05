import React from 'react';

export interface LanBackwardFastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBackwardFast(props: LanBackwardFastProps): React.ReactElement;
export default LanBackwardFast;
