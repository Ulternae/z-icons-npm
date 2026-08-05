import React from 'react';

export interface LanScrollRibbonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrollRibbonSolid(props: LanScrollRibbonSolidProps): React.ReactElement;
export default LanScrollRibbonSolid;
