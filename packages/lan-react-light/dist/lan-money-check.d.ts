import React from 'react';

export interface LanMoneyCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyCheck(props: LanMoneyCheckProps): React.ReactElement;
export default LanMoneyCheck;
