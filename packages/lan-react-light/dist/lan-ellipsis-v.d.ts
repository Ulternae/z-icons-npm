import React from 'react';

export interface LanEllipsisVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEllipsisV(props: LanEllipsisVProps): React.ReactElement;
export default LanEllipsisV;
