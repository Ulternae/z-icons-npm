import React from 'react';

export interface LanAngelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngelRegular: React.FC<LanAngelRegularProps>;
export default LanAngelRegular;
