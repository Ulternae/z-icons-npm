import React from 'react';

export interface LanUmbrellaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUmbrella: React.FC<LanUmbrellaProps>;
export default LanUmbrella;
