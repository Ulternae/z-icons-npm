import React from 'react';

export interface LanGridRound2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridRound2Thin(props: LanGridRound2ThinProps): React.ReactElement;
export default LanGridRound2Thin;
