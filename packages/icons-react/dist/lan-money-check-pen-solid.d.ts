import React from 'react';

export interface LanMoneyCheckPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyCheckPenSolid: React.FC<LanMoneyCheckPenSolidProps>;
export default LanMoneyCheckPenSolid;
