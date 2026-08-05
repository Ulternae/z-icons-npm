import React from 'react';

export interface LanDownFromBracketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownFromBracket(props: LanDownFromBracketProps): React.ReactElement;
export default LanDownFromBracket;
