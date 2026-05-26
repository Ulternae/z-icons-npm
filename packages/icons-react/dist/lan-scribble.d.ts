import React from 'react';

export interface LanScribbleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScribble: React.FC<LanScribbleProps>;
export default LanScribble;
