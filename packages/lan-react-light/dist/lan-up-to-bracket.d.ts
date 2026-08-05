import React from 'react';

export interface LanUpToBracketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpToBracket(props: LanUpToBracketProps): React.ReactElement;
export default LanUpToBracket;
