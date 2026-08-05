import React from 'react';

export interface LanHandPointRibbonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointRibbonRegular(props: LanHandPointRibbonRegularProps): React.ReactElement;
export default LanHandPointRibbonRegular;
