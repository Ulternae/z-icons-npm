import React from 'react';

export interface LanCarMirrorsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarMirrorsThin: React.FC<LanCarMirrorsThinProps>;
export default LanCarMirrorsThin;
