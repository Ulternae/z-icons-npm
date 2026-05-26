import React from 'react';

export interface LanScrewdriverSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrewdriverSolid: React.FC<LanScrewdriverSolidProps>;
export default LanScrewdriverSolid;
