import React from 'react';

export interface NeoLocationDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLocationDot: React.FC<NeoLocationDotProps>;
export default NeoLocationDot;
