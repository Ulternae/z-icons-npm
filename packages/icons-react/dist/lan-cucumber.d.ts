import React from 'react';

export interface LanCucumberProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCucumber: React.FC<LanCucumberProps>;
export default LanCucumber;
