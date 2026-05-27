import React from 'react';

export interface NeoEllipsisRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoEllipsisRegularDuo: React.FC<NeoEllipsisRegularDuoProps>;
export default NeoEllipsisRegularDuo;
