import React from 'react';

export interface MinaFlameKindlingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFlameKindling(props: MinaFlameKindlingProps): React.ReactElement;
export default MinaFlameKindling;
