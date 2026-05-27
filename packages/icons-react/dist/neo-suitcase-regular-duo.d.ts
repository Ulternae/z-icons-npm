import React from 'react';

export interface NeoSuitcaseRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSuitcaseRegularDuo: React.FC<NeoSuitcaseRegularDuoProps>;
export default NeoSuitcaseRegularDuo;
