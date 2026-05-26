import React from 'react';

export interface LanShoeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShoeThin: React.FC<LanShoeThinProps>;
export default LanShoeThin;
