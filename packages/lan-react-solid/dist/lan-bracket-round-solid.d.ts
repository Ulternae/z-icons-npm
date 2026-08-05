import React from 'react';

export interface LanBracketRoundSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBracketRoundSolid(props: LanBracketRoundSolidProps): React.ReactElement;
export default LanBracketRoundSolid;
