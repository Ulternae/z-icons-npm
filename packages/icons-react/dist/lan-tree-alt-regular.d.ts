import React from 'react';

export interface LanTreeAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeAltRegular: React.FC<LanTreeAltRegularProps>;
export default LanTreeAltRegular;
