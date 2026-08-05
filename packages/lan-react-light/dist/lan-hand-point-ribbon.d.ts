import React from 'react';

export interface LanHandPointRibbonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointRibbon(props: LanHandPointRibbonProps): React.ReactElement;
export default LanHandPointRibbon;
