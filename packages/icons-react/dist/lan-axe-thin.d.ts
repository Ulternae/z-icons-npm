import React from 'react';

export interface LanAxeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAxeThin: React.FC<LanAxeThinProps>;
export default LanAxeThin;
