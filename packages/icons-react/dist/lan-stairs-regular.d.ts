import React from 'react';

export interface LanStairsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStairsRegular: React.FC<LanStairsRegularProps>;
export default LanStairsRegular;
