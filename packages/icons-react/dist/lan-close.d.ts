import React from 'react';

export interface LanCloseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClose: React.FC<LanCloseProps>;
export default LanClose;
