import React from 'react';

export interface LanDiceD4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD4Thin(props: LanDiceD4ThinProps): React.ReactElement;
export default LanDiceD4Thin;
