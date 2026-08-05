import React from 'react';

export interface LanCowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCowSolid(props: LanCowSolidProps): React.ReactElement;
export default LanCowSolid;
