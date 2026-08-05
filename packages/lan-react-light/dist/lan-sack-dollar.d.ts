import React from 'react';

export interface LanSackDollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSackDollar(props: LanSackDollarProps): React.ReactElement;
export default LanSackDollar;
