import React from 'react';

export interface LanUmbrellaAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUmbrellaAltThin: React.FC<LanUmbrellaAltThinProps>;
export default LanUmbrellaAltThin;
