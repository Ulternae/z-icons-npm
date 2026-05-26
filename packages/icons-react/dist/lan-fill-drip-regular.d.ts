import React from 'react';

export interface LanFillDripRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFillDripRegular: React.FC<LanFillDripRegularProps>;
export default LanFillDripRegular;
