import React from 'react';

export interface LanUpToBracketThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpToBracketThin(props: LanUpToBracketThinProps): React.ReactElement;
export default LanUpToBracketThin;
