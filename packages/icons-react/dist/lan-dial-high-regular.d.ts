import React from 'react';

export interface LanDialHighRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialHighRegular: React.FC<LanDialHighRegularProps>;
export default LanDialHighRegular;
