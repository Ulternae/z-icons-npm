import React from 'react';

export interface LanGhostThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGhostThin(props: LanGhostThinProps): React.ReactElement;
export default LanGhostThin;
