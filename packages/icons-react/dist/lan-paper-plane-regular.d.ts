import React from 'react';

export interface LanPaperPlaneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaperPlaneRegular: React.FC<LanPaperPlaneRegularProps>;
export default LanPaperPlaneRegular;
