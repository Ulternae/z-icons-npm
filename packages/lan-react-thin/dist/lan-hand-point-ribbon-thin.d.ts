import React from 'react';

export interface LanHandPointRibbonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointRibbonThin(props: LanHandPointRibbonThinProps): React.ReactElement;
export default LanHandPointRibbonThin;
