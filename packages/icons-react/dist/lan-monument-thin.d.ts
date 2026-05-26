import React from 'react';

export interface LanMonumentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMonumentThin: React.FC<LanMonumentThinProps>;
export default LanMonumentThin;
