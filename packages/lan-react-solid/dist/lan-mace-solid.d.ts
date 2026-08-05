import React from 'react';

export interface LanMaceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaceSolid(props: LanMaceSolidProps): React.ReactElement;
export default LanMaceSolid;
