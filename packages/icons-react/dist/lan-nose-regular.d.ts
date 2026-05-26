import React from 'react';

export interface LanNoseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNoseRegular: React.FC<LanNoseRegularProps>;
export default LanNoseRegular;
