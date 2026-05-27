import React from 'react';

export interface NeoCloneRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCloneRegularDuo: React.FC<NeoCloneRegularDuoProps>;
export default NeoCloneRegularDuo;
