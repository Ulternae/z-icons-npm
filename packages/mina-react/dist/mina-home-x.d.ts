import React from 'react';

export interface MinaHomeXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHomeX(props: MinaHomeXProps): React.ReactElement;
export default MinaHomeX;
