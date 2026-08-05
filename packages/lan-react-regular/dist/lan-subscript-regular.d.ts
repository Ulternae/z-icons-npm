import React from 'react';

export interface LanSubscriptRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSubscriptRegular(props: LanSubscriptRegularProps): React.ReactElement;
export default LanSubscriptRegular;
