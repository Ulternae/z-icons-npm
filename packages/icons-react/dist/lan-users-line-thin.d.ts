import React from 'react';

export interface LanUsersLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersLineThin: React.FC<LanUsersLineThinProps>;
export default LanUsersLineThin;
