import React from 'react';

export interface LanGridRoundProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridRound(props: LanGridRoundProps): React.ReactElement;
export default LanGridRound;
