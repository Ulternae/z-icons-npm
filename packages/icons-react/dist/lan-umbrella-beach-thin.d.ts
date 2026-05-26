import React from 'react';

export interface LanUmbrellaBeachThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUmbrellaBeachThin: React.FC<LanUmbrellaBeachThinProps>;
export default LanUmbrellaBeachThin;
