import React from 'react';

export interface MinaBellUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellUser: React.FC<MinaBellUserProps>;
export default MinaBellUser;
