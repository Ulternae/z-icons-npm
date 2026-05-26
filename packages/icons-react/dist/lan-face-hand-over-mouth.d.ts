import React from 'react';

export interface LanFaceHandOverMouthProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceHandOverMouth: React.FC<LanFaceHandOverMouthProps>;
export default LanFaceHandOverMouth;
