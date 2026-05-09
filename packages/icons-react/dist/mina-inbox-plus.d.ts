import React from 'react';

export interface MinaInboxPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInboxPlus: React.FC<MinaInboxPlusProps>;
export default MinaInboxPlus;
