import React from 'react';

export interface MinaFlameKindlingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFlameKindling: React.FC<MinaFlameKindlingProps>;
export default MinaFlameKindling;
