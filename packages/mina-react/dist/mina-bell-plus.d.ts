import React from 'react';

export interface MinaBellPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellPlus(props: MinaBellPlusProps): React.ReactElement;
export default MinaBellPlus;
