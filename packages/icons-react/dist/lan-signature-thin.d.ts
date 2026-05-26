import React from 'react';

export interface LanSignatureThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignatureThin: React.FC<LanSignatureThinProps>;
export default LanSignatureThin;
