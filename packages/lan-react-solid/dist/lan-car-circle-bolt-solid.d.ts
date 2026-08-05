import React from 'react';

export interface LanCarCircleBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarCircleBoltSolid(props: LanCarCircleBoltSolidProps): React.ReactElement;
export default LanCarCircleBoltSolid;
