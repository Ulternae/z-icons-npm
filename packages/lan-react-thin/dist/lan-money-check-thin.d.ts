import React from 'react';

export interface LanMoneyCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyCheckThin(props: LanMoneyCheckThinProps): React.ReactElement;
export default LanMoneyCheckThin;
