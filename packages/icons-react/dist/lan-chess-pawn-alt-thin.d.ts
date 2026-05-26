import React from 'react';

export interface LanChessPawnAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessPawnAltThin: React.FC<LanChessPawnAltThinProps>;
export default LanChessPawnAltThin;
