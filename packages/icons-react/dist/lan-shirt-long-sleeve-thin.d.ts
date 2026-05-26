import React from 'react';

export interface LanShirtLongSleeveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShirtLongSleeveThin: React.FC<LanShirtLongSleeveThinProps>;
export default LanShirtLongSleeveThin;
