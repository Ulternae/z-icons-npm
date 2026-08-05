import React from 'react';

export interface LanHandBackPointRibbonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandBackPointRibbonThin(props: LanHandBackPointRibbonThinProps): React.ReactElement;
export default LanHandBackPointRibbonThin;
