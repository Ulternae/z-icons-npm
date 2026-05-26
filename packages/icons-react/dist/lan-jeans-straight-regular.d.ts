import React from 'react';

export interface LanJeansStraightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJeansStraightRegular: React.FC<LanJeansStraightRegularProps>;
export default LanJeansStraightRegular;
