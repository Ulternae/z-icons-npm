import React from 'react';

export interface LanPersonLimbsWideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonLimbsWide: React.FC<LanPersonLimbsWideProps>;
export default LanPersonLimbsWide;
