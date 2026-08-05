import React from 'react';

export interface LanIdBadgeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIdBadge(props: LanIdBadgeProps): React.ReactElement;
export default LanIdBadge;
