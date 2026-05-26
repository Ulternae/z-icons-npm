import React from 'react';

export interface LanFaceWoozyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceWoozyRegular: React.FC<LanFaceWoozyRegularProps>;
export default LanFaceWoozyRegular;
