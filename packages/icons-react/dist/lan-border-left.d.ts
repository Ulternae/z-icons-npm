import React from 'react';

export interface LanBorderLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderLeft: React.FC<LanBorderLeftProps>;
export default LanBorderLeft;
