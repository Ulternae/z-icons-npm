import React from 'react';

export interface LanDiceD10ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD10Thin(props: LanDiceD10ThinProps): React.ReactElement;
export default LanDiceD10Thin;
