import React from 'react';

export interface NeoStrikethroughProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoStrikethrough: React.FC<NeoStrikethroughProps>;
export default NeoStrikethrough;
