import React from 'react';

export interface LanButterflyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanButterflyRegular(props: LanButterflyRegularProps): React.ReactElement;
export default LanButterflyRegular;
