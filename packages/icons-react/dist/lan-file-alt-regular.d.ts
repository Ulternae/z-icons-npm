import React from 'react';

export interface LanFileAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileAltRegular: React.FC<LanFileAltRegularProps>;
export default LanFileAltRegular;
