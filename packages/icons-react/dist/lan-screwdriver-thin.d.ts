import React from 'react';

export interface LanScrewdriverThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrewdriverThin: React.FC<LanScrewdriverThinProps>;
export default LanScrewdriverThin;
