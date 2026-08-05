import React from 'react';

export interface LanBackwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBackward(props: LanBackwardProps): React.ReactElement;
export default LanBackward;
