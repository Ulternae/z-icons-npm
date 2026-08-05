import React from 'react';

export interface LanRibbonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRibbonSolid(props: LanRibbonSolidProps): React.ReactElement;
export default LanRibbonSolid;
