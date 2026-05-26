import React from 'react';

export interface LanUsersClassThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersClassThin: React.FC<LanUsersClassThinProps>;
export default LanUsersClassThin;
