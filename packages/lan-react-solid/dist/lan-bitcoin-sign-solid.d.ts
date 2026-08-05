import React from 'react';

export interface LanBitcoinSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBitcoinSignSolid(props: LanBitcoinSignSolidProps): React.ReactElement;
export default LanBitcoinSignSolid;
