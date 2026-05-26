import React from 'react';

export interface LanCircleMicrophoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMicrophoneSolid: React.FC<LanCircleMicrophoneSolidProps>;
export default LanCircleMicrophoneSolid;
