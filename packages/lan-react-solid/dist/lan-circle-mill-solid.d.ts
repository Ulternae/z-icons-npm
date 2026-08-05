import React from 'react';

export interface LanCircleMillSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMillSolid(props: LanCircleMillSolidProps): React.ReactElement;
export default LanCircleMillSolid;
