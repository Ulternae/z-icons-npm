import React from 'react';

export interface LanOnionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOnion(props: LanOnionProps): React.ReactElement;
export default LanOnion;
