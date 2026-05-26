import React from 'react';

export interface LanTableColumnsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableColumnsRegular: React.FC<LanTableColumnsRegularProps>;
export default LanTableColumnsRegular;
