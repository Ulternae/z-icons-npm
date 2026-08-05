import React from 'react';

export interface MinaBadgeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBadge(props: MinaBadgeProps): React.ReactElement;
export default MinaBadge;
