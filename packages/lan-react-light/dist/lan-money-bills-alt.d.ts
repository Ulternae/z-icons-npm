import React from 'react';

export interface LanMoneyBillsAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillsAlt(props: LanMoneyBillsAltProps): React.ReactElement;
export default LanMoneyBillsAlt;
