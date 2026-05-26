import React from 'react';

export interface LanFaceGrinSquintProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinSquint: React.FC<LanFaceGrinSquintProps>;
export default LanFaceGrinSquint;
