import React from 'react';

export interface MinaReceptionBellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaReceptionBell(props: MinaReceptionBellProps): React.ReactElement;
export default MinaReceptionBell;
