import React from 'react';

export interface LanAbacusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAbacus(props: LanAbacusProps): React.ReactElement;
export default LanAbacus;
