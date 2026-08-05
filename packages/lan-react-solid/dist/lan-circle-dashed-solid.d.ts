import React from 'react';

export interface LanCircleDashedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDashedSolid(props: LanCircleDashedSolidProps): React.ReactElement;
export default LanCircleDashedSolid;
