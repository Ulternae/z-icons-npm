import React from 'react';

export interface LanSubscriptProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSubscript(props: LanSubscriptProps): React.ReactElement;
export default LanSubscript;
