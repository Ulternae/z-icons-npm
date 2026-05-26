import React from 'react';

export interface LanOarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOars: React.FC<LanOarsProps>;
export default LanOars;
