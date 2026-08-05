import React from 'react';

export interface LanWallBrickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWallBrickSolid(props: LanWallBrickSolidProps): React.ReactElement;
export default LanWallBrickSolid;
