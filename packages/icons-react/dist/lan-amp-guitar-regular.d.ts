import React from 'react';

export interface LanAmpGuitarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAmpGuitarRegular: React.FC<LanAmpGuitarRegularProps>;
export default LanAmpGuitarRegular;
