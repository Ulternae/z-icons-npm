import React from 'react';

export interface LanBoxingGloveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxingGloveThin: React.FC<LanBoxingGloveThinProps>;
export default LanBoxingGloveThin;
