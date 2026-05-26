import React from 'react';

export interface LanFileMovProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMov: React.FC<LanFileMovProps>;
export default LanFileMov;
