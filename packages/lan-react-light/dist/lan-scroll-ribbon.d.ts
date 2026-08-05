import React from 'react';

export interface LanScrollRibbonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrollRibbon(props: LanScrollRibbonProps): React.ReactElement;
export default LanScrollRibbon;
