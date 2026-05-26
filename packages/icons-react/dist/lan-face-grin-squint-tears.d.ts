import React from 'react';

export interface LanFaceGrinSquintTearsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinSquintTears: React.FC<LanFaceGrinSquintTearsProps>;
export default LanFaceGrinSquintTears;
