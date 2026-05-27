import React from 'react';

export interface NeoExpandRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoExpandRegularDuo: React.FC<NeoExpandRegularDuoProps>;
export default NeoExpandRegularDuo;
