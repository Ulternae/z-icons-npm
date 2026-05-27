import React from 'react';

export interface CoreUmbrellaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUmbrella: React.FC<CoreUmbrellaProps>;
export default CoreUmbrella;
