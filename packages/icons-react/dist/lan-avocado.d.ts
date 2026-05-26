import React from 'react';

export interface LanAvocadoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAvocado: React.FC<LanAvocadoProps>;
export default LanAvocado;
