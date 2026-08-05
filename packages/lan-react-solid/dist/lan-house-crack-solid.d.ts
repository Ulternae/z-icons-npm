import React from 'react';

export interface LanHouseCrackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseCrackSolid(props: LanHouseCrackSolidProps): React.ReactElement;
export default LanHouseCrackSolid;
