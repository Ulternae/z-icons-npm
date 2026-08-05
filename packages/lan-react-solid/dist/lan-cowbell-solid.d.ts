import React from 'react';

export interface LanCowbellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCowbellSolid(props: LanCowbellSolidProps): React.ReactElement;
export default LanCowbellSolid;
