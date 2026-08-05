import React from 'react';

export interface LanDownToBracketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownToBracket(props: LanDownToBracketProps): React.ReactElement;
export default LanDownToBracket;
