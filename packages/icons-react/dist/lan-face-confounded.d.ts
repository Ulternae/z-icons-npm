import React from 'react';

export interface LanFaceConfoundedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceConfounded: React.FC<LanFaceConfoundedProps>;
export default LanFaceConfounded;
