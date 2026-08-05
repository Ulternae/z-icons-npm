import React from 'react';

export interface LanRibbonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRibbonThin(props: LanRibbonThinProps): React.ReactElement;
export default LanRibbonThin;
