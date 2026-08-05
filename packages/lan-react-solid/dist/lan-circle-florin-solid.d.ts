import React from 'react';

export interface LanCircleFlorinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleFlorinSolid(props: LanCircleFlorinSolidProps): React.ReactElement;
export default LanCircleFlorinSolid;
