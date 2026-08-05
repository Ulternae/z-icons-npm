import React from 'react';

export interface LanSubscriptSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSubscriptSolid(props: LanSubscriptSolidProps): React.ReactElement;
export default LanSubscriptSolid;
