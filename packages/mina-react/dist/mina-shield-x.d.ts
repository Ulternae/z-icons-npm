import React from 'react';

export interface MinaShieldXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShieldX(props: MinaShieldXProps): React.ReactElement;
export default MinaShieldX;
