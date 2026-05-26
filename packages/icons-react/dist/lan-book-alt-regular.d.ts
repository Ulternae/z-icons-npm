import React from 'react';

export interface LanBookAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookAltRegular: React.FC<LanBookAltRegularProps>;
export default LanBookAltRegular;
