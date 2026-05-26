import React from 'react';

export interface LanFileCadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCad: React.FC<LanFileCadProps>;
export default LanFileCad;
