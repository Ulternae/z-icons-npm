import React from 'react';

export interface LanMoneyCheckPenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyCheckPenThin: React.FC<LanMoneyCheckPenThinProps>;
export default LanMoneyCheckPenThin;
