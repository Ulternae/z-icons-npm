import React from 'react';

export interface LanSquareUpLeftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareUpLeftRegular: React.FC<LanSquareUpLeftRegularProps>;
export default LanSquareUpLeftRegular;
