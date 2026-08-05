import React from 'react';

export interface MinaShieldCrossedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShieldCrossed(props: MinaShieldCrossedProps): React.ReactElement;
export default MinaShieldCrossed;
