import React from 'react';

export interface LanShareAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShareAltRegular: React.FC<LanShareAltRegularProps>;
export default LanShareAltRegular;
