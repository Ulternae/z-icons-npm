import React from 'react';

export interface LanFaceExhalingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceExhaling: React.FC<LanFaceExhalingProps>;
export default LanFaceExhaling;
