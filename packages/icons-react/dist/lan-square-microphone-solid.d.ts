import React from 'react';

export interface LanSquareMicrophoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareMicrophoneSolid: React.FC<LanSquareMicrophoneSolidProps>;
export default LanSquareMicrophoneSolid;
