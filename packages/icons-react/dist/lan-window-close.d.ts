import React from 'react';

export interface LanWindowCloseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowClose: React.FC<LanWindowCloseProps>;
export default LanWindowClose;
