import React from 'react';

export interface LanTableColumnsAddBeforeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableColumnsAddBefore: React.FC<LanTableColumnsAddBeforeProps>;
export default LanTableColumnsAddBefore;
