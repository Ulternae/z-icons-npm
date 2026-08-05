import React from 'react';

export interface LanBracketsCurlyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBracketsCurly(props: LanBracketsCurlyProps): React.ReactElement;
export default LanBracketsCurly;
