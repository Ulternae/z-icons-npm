import React from 'react';

export interface MinaShieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShield(props: MinaShieldProps): React.ReactElement;
export default MinaShield;
