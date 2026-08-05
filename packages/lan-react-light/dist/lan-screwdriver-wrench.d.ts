import React from 'react';

export interface LanScrewdriverWrenchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrewdriverWrench(props: LanScrewdriverWrenchProps): React.ReactElement;
export default LanScrewdriverWrench;
