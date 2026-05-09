import React from 'react';

export interface MinaUmbrellaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUmbrella: React.FC<MinaUmbrellaProps>;
export default MinaUmbrella;
