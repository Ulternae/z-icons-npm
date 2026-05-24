import React from 'react';

export interface BruOrcidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruOrcid: React.FC<BruOrcidProps>;
export default BruOrcid;
