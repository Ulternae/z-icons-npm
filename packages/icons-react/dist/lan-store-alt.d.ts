import React from 'react';

export interface LanStoreAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoreAlt: React.FC<LanStoreAltProps>;
export default LanStoreAlt;
