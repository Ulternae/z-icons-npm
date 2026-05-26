import React from 'react';

export interface LanScrewdriverRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrewdriverRegular: React.FC<LanScrewdriverRegularProps>;
export default LanScrewdriverRegular;
