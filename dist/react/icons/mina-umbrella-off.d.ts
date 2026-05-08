import React from 'react';

export interface MinaUmbrellaOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUmbrellaOff: React.FC<MinaUmbrellaOffProps>;
export default MinaUmbrellaOff;
