import React from 'react';

export interface MinaCartXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCartX(props: MinaCartXProps): React.ReactElement;
export default MinaCartX;
