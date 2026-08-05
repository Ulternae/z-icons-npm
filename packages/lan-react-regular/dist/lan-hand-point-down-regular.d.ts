import React from 'react';

export interface LanHandPointDownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointDownRegular(props: LanHandPointDownRegularProps): React.ReactElement;
export default LanHandPointDownRegular;
