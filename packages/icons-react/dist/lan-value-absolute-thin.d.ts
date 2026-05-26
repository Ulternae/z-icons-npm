import React from 'react';

export interface LanValueAbsoluteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanValueAbsoluteThin: React.FC<LanValueAbsoluteThinProps>;
export default LanValueAbsoluteThin;
