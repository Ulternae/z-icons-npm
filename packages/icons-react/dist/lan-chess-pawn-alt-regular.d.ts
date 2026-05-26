import React from 'react';

export interface LanChessPawnAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessPawnAltRegular: React.FC<LanChessPawnAltRegularProps>;
export default LanChessPawnAltRegular;
