import React from 'react';

export interface LanListAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListAltRegular: React.FC<LanListAltRegularProps>;
export default LanListAltRegular;
