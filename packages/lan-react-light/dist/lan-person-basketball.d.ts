import React from 'react';

export interface LanPersonBasketballProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonBasketball(props: LanPersonBasketballProps): React.ReactElement;
export default LanPersonBasketball;
