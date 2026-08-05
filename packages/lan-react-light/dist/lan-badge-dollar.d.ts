import React from 'react';

export interface LanBadgeDollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadgeDollar(props: LanBadgeDollarProps): React.ReactElement;
export default LanBadgeDollar;
