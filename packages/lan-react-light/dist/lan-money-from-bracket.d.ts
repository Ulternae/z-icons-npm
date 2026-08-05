import React from 'react';

export interface LanMoneyFromBracketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyFromBracket(props: LanMoneyFromBracketProps): React.ReactElement;
export default LanMoneyFromBracket;
