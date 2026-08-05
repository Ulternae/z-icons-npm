import React from 'react';

export interface LanTabletRuggedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTabletRugged(props: LanTabletRuggedProps): React.ReactElement;
export default LanTabletRugged;
