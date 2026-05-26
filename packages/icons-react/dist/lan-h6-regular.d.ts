import React from 'react';

export interface LanH6RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH6Regular: React.FC<LanH6RegularProps>;
export default LanH6Regular;
