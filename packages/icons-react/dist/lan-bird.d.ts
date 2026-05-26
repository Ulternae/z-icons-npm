import React from 'react';

export interface LanBirdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBird: React.FC<LanBirdProps>;
export default LanBird;
