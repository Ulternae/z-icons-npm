import React from 'react';

export interface LanCircleChfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleChfSolid(props: LanCircleChfSolidProps): React.ReactElement;
export default LanCircleChfSolid;
