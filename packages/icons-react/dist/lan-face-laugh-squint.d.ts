import React from 'react';

export interface LanFaceLaughSquintProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceLaughSquint: React.FC<LanFaceLaughSquintProps>;
export default LanFaceLaughSquint;
