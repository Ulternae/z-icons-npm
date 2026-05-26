import React from 'react';

export interface LanNasRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNasRegular: React.FC<LanNasRegularProps>;
export default LanNasRegular;
