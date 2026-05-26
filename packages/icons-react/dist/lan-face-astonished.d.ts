import React from 'react';

export interface LanFaceAstonishedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceAstonished: React.FC<LanFaceAstonishedProps>;
export default LanFaceAstonished;
