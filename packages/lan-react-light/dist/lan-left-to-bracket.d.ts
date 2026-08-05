import React from 'react';

export interface LanLeftToBracketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeftToBracket(props: LanLeftToBracketProps): React.ReactElement;
export default LanLeftToBracket;
