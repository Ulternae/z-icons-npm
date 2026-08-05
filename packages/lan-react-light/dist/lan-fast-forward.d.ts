import React from 'react';

export interface LanFastForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFastForward(props: LanFastForwardProps): React.ReactElement;
export default LanFastForward;
