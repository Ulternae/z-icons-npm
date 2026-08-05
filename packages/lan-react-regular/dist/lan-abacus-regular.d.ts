import React from 'react';

export interface LanAbacusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAbacusRegular(props: LanAbacusRegularProps): React.ReactElement;
export default LanAbacusRegular;
