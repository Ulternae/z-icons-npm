import React from 'react';

export interface LanLocationArrowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLocationArrowRegular: React.FC<LanLocationArrowRegularProps>;
export default LanLocationArrowRegular;
