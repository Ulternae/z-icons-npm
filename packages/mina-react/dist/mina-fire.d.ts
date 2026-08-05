import React from 'react';

export interface MinaFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFire(props: MinaFireProps): React.ReactElement;
export default MinaFire;
