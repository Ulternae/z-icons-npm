import React from 'react';

export interface LanBitcoinSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBitcoinSignThin(props: LanBitcoinSignThinProps): React.ReactElement;
export default LanBitcoinSignThin;
