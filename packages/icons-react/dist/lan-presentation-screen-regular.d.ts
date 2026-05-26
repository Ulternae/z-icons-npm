import React from 'react';

export interface LanPresentationScreenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPresentationScreenRegular: React.FC<LanPresentationScreenRegularProps>;
export default LanPresentationScreenRegular;
