import React from 'react';

export interface LanApostropheThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanApostropheThin: React.FC<LanApostropheThinProps>;
export default LanApostropheThin;
