import React from 'react';

export interface LanFerrisWheelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFerrisWheelSolid(props: LanFerrisWheelSolidProps): React.ReactElement;
export default LanFerrisWheelSolid;
