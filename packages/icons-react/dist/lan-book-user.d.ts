import React from 'react';

export interface LanBookUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookUser: React.FC<LanBookUserProps>;
export default LanBookUser;
