import React from 'react';

export interface LanScrewdriverWrenchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrewdriverWrench: React.FC<LanScrewdriverWrenchProps>;
export default LanScrewdriverWrench;
