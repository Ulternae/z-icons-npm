import React from 'react';

export interface LanBlockBrickFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlockBrickFireSolid(props: LanBlockBrickFireSolidProps): React.ReactElement;
export default LanBlockBrickFireSolid;
