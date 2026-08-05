import React from 'react';

export interface LanCircleDongSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDongSolid(props: LanCircleDongSolidProps): React.ReactElement;
export default LanCircleDongSolid;
