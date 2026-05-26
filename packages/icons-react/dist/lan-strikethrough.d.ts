import React from 'react';

export interface LanStrikethroughProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStrikethrough: React.FC<LanStrikethroughProps>;
export default LanStrikethrough;
