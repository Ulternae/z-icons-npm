import React from 'react';

export interface MinaBackpackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBackpack: React.FC<MinaBackpackProps>;
export default MinaBackpack;
