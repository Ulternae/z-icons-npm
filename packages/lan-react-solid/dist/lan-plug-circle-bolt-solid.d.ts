import React from 'react';

export interface LanPlugCircleBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugCircleBoltSolid(props: LanPlugCircleBoltSolidProps): React.ReactElement;
export default LanPlugCircleBoltSolid;
