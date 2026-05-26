import React from 'react';

export interface LanVolcanoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolcanoThin: React.FC<LanVolcanoThinProps>;
export default LanVolcanoThin;
