import React from 'react';

export interface LanDownToBracketThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownToBracketThin(props: LanDownToBracketThinProps): React.ReactElement;
export default LanDownToBracketThin;
