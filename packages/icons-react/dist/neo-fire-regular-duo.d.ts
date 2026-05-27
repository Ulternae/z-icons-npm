import React from 'react';

export interface NeoFireRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFireRegularDuo: React.FC<NeoFireRegularDuoProps>;
export default NeoFireRegularDuo;
