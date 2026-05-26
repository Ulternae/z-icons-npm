import React from 'react';

export interface LanNarwhalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNarwhal: React.FC<LanNarwhalProps>;
export default LanNarwhal;
