import React from 'react';

export interface LanChessPawnAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessPawnAlt: React.FC<LanChessPawnAltProps>;
export default LanChessPawnAlt;
