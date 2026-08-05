import React from 'react';

export interface LanCircleBSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBSolid(props: LanCircleBSolidProps): React.ReactElement;
export default LanCircleBSolid;
