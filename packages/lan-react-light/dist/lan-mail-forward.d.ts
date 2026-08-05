import React from 'react';

export interface LanMailForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMailForward(props: LanMailForwardProps): React.ReactElement;
export default LanMailForward;
