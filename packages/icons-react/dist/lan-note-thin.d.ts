import React from 'react';

export interface LanNoteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNoteThin: React.FC<LanNoteThinProps>;
export default LanNoteThin;
