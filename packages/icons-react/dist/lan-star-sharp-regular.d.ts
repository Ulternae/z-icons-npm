import React from 'react';

export interface LanStarSharpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarSharpRegular: React.FC<LanStarSharpRegularProps>;
export default LanStarSharpRegular;
