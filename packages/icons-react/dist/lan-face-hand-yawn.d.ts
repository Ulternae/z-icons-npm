import React from 'react';

export interface LanFaceHandYawnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceHandYawn: React.FC<LanFaceHandYawnProps>;
export default LanFaceHandYawn;
