import React from 'react';

export interface LanDiceD20ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD20Thin(props: LanDiceD20ThinProps): React.ReactElement;
export default LanDiceD20Thin;
