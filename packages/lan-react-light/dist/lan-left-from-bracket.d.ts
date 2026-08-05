import React from 'react';

export interface LanLeftFromBracketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeftFromBracket(props: LanLeftFromBracketProps): React.ReactElement;
export default LanLeftFromBracket;
