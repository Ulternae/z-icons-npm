import React from 'react';

export interface LanFaceDowncastSweatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDowncastSweat: React.FC<LanFaceDowncastSweatProps>;
export default LanFaceDowncastSweat;
