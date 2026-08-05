import React from 'react';

export interface LanReelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReelSolid(props: LanReelSolidProps): React.ReactElement;
export default LanReelSolid;
