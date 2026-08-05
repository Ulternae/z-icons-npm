import React from 'react';

export interface MinaFlameProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFlame(props: MinaFlameProps): React.ReactElement;
export default MinaFlame;
