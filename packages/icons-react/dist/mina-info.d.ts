import React from 'react';

export interface MinaInfoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfo: React.FC<MinaInfoProps>;
export default MinaInfo;
