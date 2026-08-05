import React from 'react';

export interface LanFlyingDiscProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlyingDisc(props: LanFlyingDiscProps): React.ReactElement;
export default LanFlyingDisc;
