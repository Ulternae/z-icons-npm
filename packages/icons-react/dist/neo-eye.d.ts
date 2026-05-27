import React from 'react';

export interface NeoEyeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoEye: React.FC<NeoEyeProps>;
export default NeoEye;
