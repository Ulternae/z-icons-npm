import React from 'react';

export interface LanDiceD10RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD10Regular: React.FC<LanDiceD10RegularProps>;
export default LanDiceD10Regular;
