import React from 'react';

export interface LanCirclePSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePSolid(props: LanCirclePSolidProps): React.ReactElement;
export default LanCirclePSolid;
