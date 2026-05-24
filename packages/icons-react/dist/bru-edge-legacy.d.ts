import React from 'react';

export interface BruEdgeLegacyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruEdgeLegacy: React.FC<BruEdgeLegacyProps>;
export default BruEdgeLegacy;
