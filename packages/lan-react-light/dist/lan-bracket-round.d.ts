import React from 'react';

export interface LanBracketRoundProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBracketRound(props: LanBracketRoundProps): React.ReactElement;
export default LanBracketRound;
