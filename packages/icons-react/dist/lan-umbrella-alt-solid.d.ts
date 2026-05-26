import React from 'react';

export interface LanUmbrellaAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUmbrellaAltSolid: React.FC<LanUmbrellaAltSolidProps>;
export default LanUmbrellaAltSolid;
