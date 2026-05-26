import React from 'react';

export interface LanUpLeftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpLeftRegular: React.FC<LanUpLeftRegularProps>;
export default LanUpLeftRegular;
