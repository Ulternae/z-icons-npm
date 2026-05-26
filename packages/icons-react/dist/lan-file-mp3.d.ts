import React from 'react';

export interface LanFileMp3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMp3: React.FC<LanFileMp3Props>;
export default LanFileMp3;
