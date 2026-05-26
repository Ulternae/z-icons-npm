import React from 'react';

export interface LanPersonSleddingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSleddingThin: React.FC<LanPersonSleddingThinProps>;
export default LanPersonSleddingThin;
