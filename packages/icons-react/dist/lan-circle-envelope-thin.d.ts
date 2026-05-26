import React from 'react';

export interface LanCircleEnvelopeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEnvelopeThin: React.FC<LanCircleEnvelopeThinProps>;
export default LanCircleEnvelopeThin;
