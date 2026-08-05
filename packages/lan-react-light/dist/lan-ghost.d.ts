import React from 'react';

export interface LanGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGhost(props: LanGhostProps): React.ReactElement;
export default LanGhost;
