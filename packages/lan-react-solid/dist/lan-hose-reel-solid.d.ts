import React from 'react';

export interface LanHoseReelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHoseReelSolid(props: LanHoseReelSolidProps): React.ReactElement;
export default LanHoseReelSolid;
