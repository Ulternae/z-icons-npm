import React from 'react';

export interface LanUpFromBracketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpFromBracket(props: LanUpFromBracketProps): React.ReactElement;
export default LanUpFromBracket;
