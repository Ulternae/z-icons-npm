import React from 'react';

export interface MinaReceptionBellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaReceptionBell: React.FC<MinaReceptionBellProps>;
export default MinaReceptionBell;
