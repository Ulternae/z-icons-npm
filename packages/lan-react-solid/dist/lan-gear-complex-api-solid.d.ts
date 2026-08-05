import React from 'react';

export interface LanGearComplexApiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGearComplexApiSolid(props: LanGearComplexApiSolidProps): React.ReactElement;
export default LanGearComplexApiSolid;
