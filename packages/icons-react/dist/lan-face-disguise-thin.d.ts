import React from 'react';

export interface LanFaceDisguiseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDisguiseThin: React.FC<LanFaceDisguiseThinProps>;
export default LanFaceDisguiseThin;
