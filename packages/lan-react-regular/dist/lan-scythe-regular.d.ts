import React from 'react';

export interface LanScytheRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScytheRegular(props: LanScytheRegularProps): React.ReactElement;
export default LanScytheRegular;
