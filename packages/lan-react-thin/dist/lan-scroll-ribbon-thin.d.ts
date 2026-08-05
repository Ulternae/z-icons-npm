import React from 'react';

export interface LanScrollRibbonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrollRibbonThin(props: LanScrollRibbonThinProps): React.ReactElement;
export default LanScrollRibbonThin;
