import React from 'react';

export interface LanCandyCaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandyCaneSolid(props: LanCandyCaneSolidProps): React.ReactElement;
export default LanCandyCaneSolid;
