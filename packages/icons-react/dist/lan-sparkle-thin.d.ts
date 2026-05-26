import React from 'react';

export interface LanSparkleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSparkleThin: React.FC<LanSparkleThinProps>;
export default LanSparkleThin;
