import React from 'react';

export interface LanH5RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH5Regular: React.FC<LanH5RegularProps>;
export default LanH5Regular;
