import React from 'react';

export interface LanEThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEThin: React.FC<LanEThinProps>;
export default LanEThin;
