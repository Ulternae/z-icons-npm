import React from 'react';

export interface NeoCompressRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCompressRegularDuo: React.FC<NeoCompressRegularDuoProps>;
export default NeoCompressRegularDuo;
