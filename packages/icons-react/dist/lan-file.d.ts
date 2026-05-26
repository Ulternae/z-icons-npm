import React from 'react';

export interface LanFileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFile: React.FC<LanFileProps>;
export default LanFile;
