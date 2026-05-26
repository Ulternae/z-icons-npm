import React from 'react';

export interface LanBrailleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBraille: React.FC<LanBrailleProps>;
export default LanBraille;
