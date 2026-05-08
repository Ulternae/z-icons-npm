import React from 'react';

export interface MinaBookUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookUser: React.FC<MinaBookUserProps>;
export default MinaBookUser;
