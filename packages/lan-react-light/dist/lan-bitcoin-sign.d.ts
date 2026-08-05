import React from 'react';

export interface LanBitcoinSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBitcoinSign(props: LanBitcoinSignProps): React.ReactElement;
export default LanBitcoinSign;
