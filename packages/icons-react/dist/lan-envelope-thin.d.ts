import React from 'react';

export interface LanEnvelopeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeThin: React.FC<LanEnvelopeThinProps>;
export default LanEnvelopeThin;
