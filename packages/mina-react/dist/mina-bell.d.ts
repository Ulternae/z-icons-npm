import React from 'react';

export interface MinaBellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBell(props: MinaBellProps): React.ReactElement;
export default MinaBell;
