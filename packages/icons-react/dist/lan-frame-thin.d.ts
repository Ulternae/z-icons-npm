import React from 'react';

export interface LanFrameThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFrameThin: React.FC<LanFrameThinProps>;
export default LanFrameThin;
