import React from 'react';

export interface LanChessPawnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessPawnThin: React.FC<LanChessPawnThinProps>;
export default LanChessPawnThin;
