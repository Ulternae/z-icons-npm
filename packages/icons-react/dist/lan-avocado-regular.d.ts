import React from 'react';

export interface LanAvocadoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAvocadoRegular: React.FC<LanAvocadoRegularProps>;
export default LanAvocadoRegular;
