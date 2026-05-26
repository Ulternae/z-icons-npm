import React from 'react';

export interface LanBarcodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarcodeThin: React.FC<LanBarcodeThinProps>;
export default LanBarcodeThin;
