import React from 'react';

export interface MinaBellXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellX(props: MinaBellXProps): React.ReactElement;
export default MinaBellX;
