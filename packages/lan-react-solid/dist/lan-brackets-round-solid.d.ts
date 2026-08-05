import React from 'react';

export interface LanBracketsRoundSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBracketsRoundSolid(props: LanBracketsRoundSolidProps): React.ReactElement;
export default LanBracketsRoundSolid;
