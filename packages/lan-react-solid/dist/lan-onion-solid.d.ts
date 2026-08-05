import React from 'react';

export interface LanOnionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOnionSolid(props: LanOnionSolidProps): React.ReactElement;
export default LanOnionSolid;
