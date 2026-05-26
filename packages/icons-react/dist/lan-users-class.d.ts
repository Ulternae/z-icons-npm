import React from 'react';

export interface LanUsersClassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersClass: React.FC<LanUsersClassProps>;
export default LanUsersClass;
