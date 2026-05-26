import React from 'react';

export interface LanFaceShushRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceShushRegular: React.FC<LanFaceShushRegularProps>;
export default LanFaceShushRegular;
