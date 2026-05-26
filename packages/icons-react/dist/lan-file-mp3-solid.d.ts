import React from 'react';

export interface LanFileMp3SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMp3Solid: React.FC<LanFileMp3SolidProps>;
export default LanFileMp3Solid;
