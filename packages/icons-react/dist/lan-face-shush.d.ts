import React from 'react';

export interface LanFaceShushProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceShush: React.FC<LanFaceShushProps>;
export default LanFaceShush;
