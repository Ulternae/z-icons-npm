import React from 'react';

export interface LanTableColumnsRemoveBeforeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableColumnsRemoveBefore: React.FC<LanTableColumnsRemoveBeforeProps>;
export default LanTableColumnsRemoveBefore;
