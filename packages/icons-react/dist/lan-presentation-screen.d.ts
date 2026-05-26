import React from 'react';

export interface LanPresentationScreenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPresentationScreen: React.FC<LanPresentationScreenProps>;
export default LanPresentationScreen;
