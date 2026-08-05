import React from 'react';

export interface LanScrollRibbonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrollRibbonRegular(props: LanScrollRibbonRegularProps): React.ReactElement;
export default LanScrollRibbonRegular;
