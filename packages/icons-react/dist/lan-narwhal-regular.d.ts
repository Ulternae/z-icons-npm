import React from 'react';

export interface LanNarwhalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNarwhalRegular: React.FC<LanNarwhalRegularProps>;
export default LanNarwhalRegular;
