import React from 'react';

export interface LanHatSantaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatSanta: React.FC<LanHatSantaProps>;
export default LanHatSanta;
