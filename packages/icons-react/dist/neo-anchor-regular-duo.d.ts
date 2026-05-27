import React from 'react';

export interface NeoAnchorRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAnchorRegularDuo: React.FC<NeoAnchorRegularDuoProps>;
export default NeoAnchorRegularDuo;
