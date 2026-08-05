import React from 'react';

export interface LanStarSharpHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarSharpHalf(props: LanStarSharpHalfProps): React.ReactElement;
export default LanStarSharpHalf;
