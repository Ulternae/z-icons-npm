import React from 'react';

export interface MinaShieldPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShieldPlus(props: MinaShieldPlusProps): React.ReactElement;
export default MinaShieldPlus;
