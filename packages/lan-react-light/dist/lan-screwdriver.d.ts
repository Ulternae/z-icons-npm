import React from 'react';

export interface LanScrewdriverProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrewdriver(props: LanScrewdriverProps): React.ReactElement;
export default LanScrewdriver;
