import React from 'react';

export interface LanUmbrellaBeachSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUmbrellaBeachSolid: React.FC<LanUmbrellaBeachSolidProps>;
export default LanUmbrellaBeachSolid;
