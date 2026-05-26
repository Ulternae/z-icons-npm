import React from 'react';

export interface LanFileJsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileJs: React.FC<LanFileJsProps>;
export default LanFileJs;
