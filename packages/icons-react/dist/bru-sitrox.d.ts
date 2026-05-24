import React from 'react';

export interface BruSitroxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSitrox: React.FC<BruSitroxProps>;
export default BruSitrox;
