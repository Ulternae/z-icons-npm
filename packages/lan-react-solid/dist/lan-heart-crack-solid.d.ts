import React from 'react';

export interface LanHeartCrackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartCrackSolid(props: LanHeartCrackSolidProps): React.ReactElement;
export default LanHeartCrackSolid;
