import React from 'react';

export interface LanAlien8bitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlien8bitSolid(props: LanAlien8bitSolidProps): React.ReactElement;
export default LanAlien8bitSolid;
