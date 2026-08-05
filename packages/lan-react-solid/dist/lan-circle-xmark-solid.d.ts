import React from 'react';

export interface LanCircleXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleXmarkSolid(props: LanCircleXmarkSolidProps): React.ReactElement;
export default LanCircleXmarkSolid;
