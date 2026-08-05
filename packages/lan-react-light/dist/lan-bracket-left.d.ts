import React from 'react';

export interface LanBracketLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBracketLeft(props: LanBracketLeftProps): React.ReactElement;
export default LanBracketLeft;
