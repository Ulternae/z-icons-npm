import React from 'react';

export interface LanGearComplexSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGearComplexSolid(props: LanGearComplexSolidProps): React.ReactElement;
export default LanGearComplexSolid;
