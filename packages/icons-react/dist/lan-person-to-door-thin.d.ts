import React from 'react';

export interface LanPersonToDoorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonToDoorThin: React.FC<LanPersonToDoorThinProps>;
export default LanPersonToDoorThin;
