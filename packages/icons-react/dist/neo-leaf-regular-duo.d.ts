import React from 'react';

export interface NeoLeafRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLeafRegularDuo: React.FC<NeoLeafRegularDuoProps>;
export default NeoLeafRegularDuo;
