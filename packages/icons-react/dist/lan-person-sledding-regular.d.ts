import React from 'react';

export interface LanPersonSleddingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSleddingRegular: React.FC<LanPersonSleddingRegularProps>;
export default LanPersonSleddingRegular;
