import React from 'react';

export interface LanBootRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBootRegular: React.FC<LanBootRegularProps>;
export default LanBootRegular;
