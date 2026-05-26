import React from 'react';

export interface LanPollPeopleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPollPeopleThin: React.FC<LanPollPeopleThinProps>;
export default LanPollPeopleThin;
