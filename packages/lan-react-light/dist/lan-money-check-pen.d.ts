import React from 'react';

export interface LanMoneyCheckPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyCheckPen(props: LanMoneyCheckPenProps): React.ReactElement;
export default LanMoneyCheckPen;
