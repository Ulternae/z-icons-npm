import React from 'react';

export interface LanBacteriumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBacterium: React.FC<LanBacteriumProps>;
export default LanBacterium;
