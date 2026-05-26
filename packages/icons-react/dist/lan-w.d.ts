import React from 'react';

export interface LanWProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanW: React.FC<LanWProps>;
export default LanW;
