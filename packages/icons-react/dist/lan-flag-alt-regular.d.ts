import React from 'react';

export interface LanFlagAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagAltRegular: React.FC<LanFlagAltRegularProps>;
export default LanFlagAltRegular;
