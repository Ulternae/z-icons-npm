import React from 'react';

export interface LanFaceMonocleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMonocleThin: React.FC<LanFaceMonocleThinProps>;
export default LanFaceMonocleThin;
