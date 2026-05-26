import React from 'react';

export interface LanArrowsCrossRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsCrossRegular: React.FC<LanArrowsCrossRegularProps>;
export default LanArrowsCrossRegular;
