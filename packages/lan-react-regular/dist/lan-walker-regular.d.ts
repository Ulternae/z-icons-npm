import React from 'react';

export interface LanWalkerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWalkerRegular(props: LanWalkerRegularProps): React.ReactElement;
export default LanWalkerRegular;
