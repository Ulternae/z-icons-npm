import React from 'react';

export interface NeoCheckRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCheckRegularDuo: React.FC<NeoCheckRegularDuoProps>;
export default NeoCheckRegularDuo;
