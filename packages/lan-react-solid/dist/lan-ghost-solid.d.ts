import React from 'react';

export interface LanGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGhostSolid(props: LanGhostSolidProps): React.ReactElement;
export default LanGhostSolid;
