import React from 'react';

export interface LanDiceD12ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD12Thin(props: LanDiceD12ThinProps): React.ReactElement;
export default LanDiceD12Thin;
