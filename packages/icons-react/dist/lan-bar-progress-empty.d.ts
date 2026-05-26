import React from 'react';

export interface LanBarProgressEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressEmpty: React.FC<LanBarProgressEmptyProps>;
export default LanBarProgressEmpty;
