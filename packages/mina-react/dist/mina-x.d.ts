import React from 'react';

export interface MinaXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaX(props: MinaXProps): React.ReactElement;
export default MinaX;
