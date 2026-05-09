import React from 'react';

export interface MinaHeartUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartUser: React.FC<MinaHeartUserProps>;
export default MinaHeartUser;
