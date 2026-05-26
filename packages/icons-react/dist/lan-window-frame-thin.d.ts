import React from 'react';

export interface LanWindowFrameThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowFrameThin: React.FC<LanWindowFrameThinProps>;
export default LanWindowFrameThin;
