import React from 'react';

export interface LanCircleDSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDSolid(props: LanCircleDSolidProps): React.ReactElement;
export default LanCircleDSolid;
