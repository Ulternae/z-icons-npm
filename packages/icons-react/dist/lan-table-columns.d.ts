import React from 'react';

export interface LanTableColumnsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableColumns: React.FC<LanTableColumnsProps>;
export default LanTableColumns;
