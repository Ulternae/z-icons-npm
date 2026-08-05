import React from 'react';

export interface LanHandPointUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointUpRegular(props: LanHandPointUpRegularProps): React.ReactElement;
export default LanHandPointUpRegular;
