import React from 'react';

export interface LanFaceWearyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceWeary: React.FC<LanFaceWearyProps>;
export default LanFaceWeary;
