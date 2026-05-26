import React from 'react';

export interface LanSpadeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpadeThin: React.FC<LanSpadeThinProps>;
export default LanSpadeThin;
