import React from 'react';

export interface LanCircleMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMoonSolid(props: LanCircleMoonSolidProps): React.ReactElement;
export default LanCircleMoonSolid;
