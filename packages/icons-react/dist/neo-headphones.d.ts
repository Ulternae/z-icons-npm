import React from 'react';

export interface NeoHeadphonesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoHeadphones: React.FC<NeoHeadphonesProps>;
export default NeoHeadphones;
