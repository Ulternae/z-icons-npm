import React from 'react';

export interface LanDiceD6ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD6Thin(props: LanDiceD6ThinProps): React.ReactElement;
export default LanDiceD6Thin;
