import React from 'react';

export interface LanFaceKissRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceKissRegular: React.FC<LanFaceKissRegularProps>;
export default LanFaceKissRegular;
