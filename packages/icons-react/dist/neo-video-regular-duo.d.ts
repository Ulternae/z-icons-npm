import React from 'react';

export interface NeoVideoRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVideoRegularDuo: React.FC<NeoVideoRegularDuoProps>;
export default NeoVideoRegularDuo;
