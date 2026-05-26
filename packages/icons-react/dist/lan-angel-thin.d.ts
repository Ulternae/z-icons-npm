import React from 'react';

export interface LanAngelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngelThin: React.FC<LanAngelThinProps>;
export default LanAngelThin;
