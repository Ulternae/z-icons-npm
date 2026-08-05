import React from 'react';

export interface LanMoneyCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyCheckSolid(props: LanMoneyCheckSolidProps): React.ReactElement;
export default LanMoneyCheckSolid;
