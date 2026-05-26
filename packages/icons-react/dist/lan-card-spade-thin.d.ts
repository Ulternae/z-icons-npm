import React from 'react';

export interface LanCardSpadeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardSpadeThin: React.FC<LanCardSpadeThinProps>;
export default LanCardSpadeThin;
