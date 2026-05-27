import React from 'react';

export interface CoreThumbtackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreThumbtack: React.FC<CoreThumbtackProps>;
export default CoreThumbtack;
