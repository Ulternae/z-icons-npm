import React from 'react';

export interface LanBringForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBringForward(props: LanBringForwardProps): React.ReactElement;
export default LanBringForward;
