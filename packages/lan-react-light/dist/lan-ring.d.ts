import React from 'react';

export interface LanRingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRing(props: LanRingProps): React.ReactElement;
export default LanRing;
