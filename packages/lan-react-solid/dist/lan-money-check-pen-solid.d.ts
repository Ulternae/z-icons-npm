import React from 'react';

export interface LanMoneyCheckPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyCheckPenSolid(props: LanMoneyCheckPenSolidProps): React.ReactElement;
export default LanMoneyCheckPenSolid;
