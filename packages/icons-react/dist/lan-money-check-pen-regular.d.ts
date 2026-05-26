import React from 'react';

export interface LanMoneyCheckPenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyCheckPenRegular: React.FC<LanMoneyCheckPenRegularProps>;
export default LanMoneyCheckPenRegular;
