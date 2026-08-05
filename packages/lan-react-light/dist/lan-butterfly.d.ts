import React from 'react';

export interface LanButterflyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanButterfly(props: LanButterflyProps): React.ReactElement;
export default LanButterfly;
