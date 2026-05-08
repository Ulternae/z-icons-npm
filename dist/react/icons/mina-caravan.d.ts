import React from 'react';

export interface MinaCaravanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCaravan: React.FC<MinaCaravanProps>;
export default MinaCaravan;
