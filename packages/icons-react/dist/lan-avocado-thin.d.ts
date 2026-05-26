import React from 'react';

export interface LanAvocadoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAvocadoThin: React.FC<LanAvocadoThinProps>;
export default LanAvocadoThin;
