import React from 'react';

export interface LanHandPointRibbonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointRibbonSolid(props: LanHandPointRibbonSolidProps): React.ReactElement;
export default LanHandPointRibbonSolid;
