import React from 'react';

export interface LanBoldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBold: React.FC<LanBoldProps>;
export default LanBold;
