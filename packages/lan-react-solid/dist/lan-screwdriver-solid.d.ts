import React from 'react';

export interface LanScrewdriverSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrewdriverSolid(props: LanScrewdriverSolidProps): React.ReactElement;
export default LanScrewdriverSolid;
