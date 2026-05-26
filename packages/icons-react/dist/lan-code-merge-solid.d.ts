import React from 'react';

export interface LanCodeMergeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeMergeSolid: React.FC<LanCodeMergeSolidProps>;
export default LanCodeMergeSolid;
