import React from 'react';

export interface LanRibbonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRibbon(props: LanRibbonProps): React.ReactElement;
export default LanRibbon;
