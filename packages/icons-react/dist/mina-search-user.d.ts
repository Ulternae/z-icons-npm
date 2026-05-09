import React from 'react';

export interface MinaSearchUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchUser: React.FC<MinaSearchUserProps>;
export default MinaSearchUser;
