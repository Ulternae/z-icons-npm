import React from 'react';

export interface LanBullhornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBullhornThin: React.FC<LanBullhornThinProps>;
export default LanBullhornThin;
