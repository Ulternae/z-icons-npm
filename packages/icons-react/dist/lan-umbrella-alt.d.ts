import React from 'react';

export interface LanUmbrellaAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUmbrellaAlt: React.FC<LanUmbrellaAltProps>;
export default LanUmbrellaAlt;
