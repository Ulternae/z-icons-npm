import React from 'react';

export interface LanFenceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFenceThin: React.FC<LanFenceThinProps>;
export default LanFenceThin;
