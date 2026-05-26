import React from 'react';

export interface LanUsersRectangleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersRectangleThin: React.FC<LanUsersRectangleThinProps>;
export default LanUsersRectangleThin;
