import React from 'react';

export interface LanEllipsisHThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEllipsisHThin(props: LanEllipsisHThinProps): React.ReactElement;
export default LanEllipsisHThin;
