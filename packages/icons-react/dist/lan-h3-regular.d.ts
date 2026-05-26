import React from 'react';

export interface LanH3RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH3Regular: React.FC<LanH3RegularProps>;
export default LanH3Regular;
