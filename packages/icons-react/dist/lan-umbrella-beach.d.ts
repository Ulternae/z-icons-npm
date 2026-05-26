import React from 'react';

export interface LanUmbrellaBeachProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUmbrellaBeach: React.FC<LanUmbrellaBeachProps>;
export default LanUmbrellaBeach;
