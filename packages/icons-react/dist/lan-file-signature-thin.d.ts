import React from 'react';

export interface LanFileSignatureThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileSignatureThin: React.FC<LanFileSignatureThinProps>;
export default LanFileSignatureThin;
