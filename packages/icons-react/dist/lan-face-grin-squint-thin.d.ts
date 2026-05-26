import React from 'react';

export interface LanFaceGrinSquintThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinSquintThin: React.FC<LanFaceGrinSquintThinProps>;
export default LanFaceGrinSquintThin;
