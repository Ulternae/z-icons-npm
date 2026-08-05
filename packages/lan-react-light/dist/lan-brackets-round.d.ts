import React from 'react';

export interface LanBracketsRoundProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBracketsRound(props: LanBracketsRoundProps): React.ReactElement;
export default LanBracketsRound;
