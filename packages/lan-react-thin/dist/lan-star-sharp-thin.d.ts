import React from 'react';

export interface LanStarSharpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarSharpThin(props: LanStarSharpThinProps): React.ReactElement;
export default LanStarSharpThin;
