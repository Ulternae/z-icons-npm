import React from 'react';

export interface MinaUmbrellaOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUmbrellaOffSolid: React.FC<MinaUmbrellaOffSolidProps>;
export default MinaUmbrellaOffSolid;
