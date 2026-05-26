import React from 'react';

export interface LanCucumberRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCucumberRegular: React.FC<LanCucumberRegularProps>;
export default LanCucumberRegular;
