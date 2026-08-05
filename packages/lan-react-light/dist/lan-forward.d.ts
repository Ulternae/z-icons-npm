import React from 'react';

export interface LanForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanForward(props: LanForwardProps): React.ReactElement;
export default LanForward;
