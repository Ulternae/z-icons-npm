import React from 'react';

export interface LanCircleMSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMSolid(props: LanCircleMSolidProps): React.ReactElement;
export default LanCircleMSolid;
