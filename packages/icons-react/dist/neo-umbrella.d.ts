import React from 'react';

export interface NeoUmbrellaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoUmbrella: React.FC<NeoUmbrellaProps>;
export default NeoUmbrella;
