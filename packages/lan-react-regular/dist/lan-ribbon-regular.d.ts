import React from 'react';

export interface LanRibbonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRibbonRegular(props: LanRibbonRegularProps): React.ReactElement;
export default LanRibbonRegular;
