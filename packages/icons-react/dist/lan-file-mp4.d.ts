import React from 'react';

export interface LanFileMp4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMp4: React.FC<LanFileMp4Props>;
export default LanFileMp4;
