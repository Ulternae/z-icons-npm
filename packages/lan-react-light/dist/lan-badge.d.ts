import React from 'react';

export interface LanBadgeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadge(props: LanBadgeProps): React.ReactElement;
export default LanBadge;
