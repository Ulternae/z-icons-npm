import React from 'react';

export interface NeoCircleInfoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircleInfo: React.FC<NeoCircleInfoProps>;
export default NeoCircleInfo;
