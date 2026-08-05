import React from 'react';

export interface LanEqualsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEqualsRegular(props: LanEqualsRegularProps): React.ReactElement;
export default LanEqualsRegular;
