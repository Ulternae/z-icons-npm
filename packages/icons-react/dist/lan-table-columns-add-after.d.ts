import React from 'react';

export interface LanTableColumnsAddAfterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableColumnsAddAfter: React.FC<LanTableColumnsAddAfterProps>;
export default LanTableColumnsAddAfter;
