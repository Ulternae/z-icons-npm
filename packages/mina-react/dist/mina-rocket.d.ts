import React from 'react';

export interface MinaRocketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRocket(props: MinaRocketProps): React.ReactElement;
export default MinaRocket;
