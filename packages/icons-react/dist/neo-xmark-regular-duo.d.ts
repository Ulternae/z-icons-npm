import React from 'react';

export interface NeoXmarkRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoXmarkRegularDuo: React.FC<NeoXmarkRegularDuoProps>;
export default NeoXmarkRegularDuo;
