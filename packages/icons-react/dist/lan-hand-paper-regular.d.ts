import React from 'react';

export interface LanHandPaperRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPaperRegular: React.FC<LanHandPaperRegularProps>;
export default LanHandPaperRegular;
