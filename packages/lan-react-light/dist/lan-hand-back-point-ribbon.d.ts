import React from 'react';

export interface LanHandBackPointRibbonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandBackPointRibbon(props: LanHandBackPointRibbonProps): React.ReactElement;
export default LanHandBackPointRibbon;
