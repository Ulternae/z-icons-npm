import React from 'react';

export interface LanHandPeaceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPeaceSolid(props: LanHandPeaceSolidProps): React.ReactElement;
export default LanHandPeaceSolid;
