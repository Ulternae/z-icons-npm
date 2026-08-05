import React from 'react';

export interface LanCircleBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBoltSolid(props: LanCircleBoltSolidProps): React.ReactElement;
export default LanCircleBoltSolid;
