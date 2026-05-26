import React from 'react';

export interface LanPersonRifleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonRifleThin: React.FC<LanPersonRifleThinProps>;
export default LanPersonRifleThin;
