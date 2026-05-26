import React from 'react';

export interface LanMoneyCheckPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyCheckPen: React.FC<LanMoneyCheckPenProps>;
export default LanMoneyCheckPen;
