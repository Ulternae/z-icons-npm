import React from 'react';

export interface LanDiceD8ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD8Thin(props: LanDiceD8ThinProps): React.ReactElement;
export default LanDiceD8Thin;
