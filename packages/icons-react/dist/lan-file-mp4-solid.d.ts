import React from 'react';

export interface LanFileMp4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMp4Solid: React.FC<LanFileMp4SolidProps>;
export default LanFileMp4Solid;
