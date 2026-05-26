import React from 'react';

export interface LanUnicycleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUnicycleThin: React.FC<LanUnicycleThinProps>;
export default LanUnicycleThin;
