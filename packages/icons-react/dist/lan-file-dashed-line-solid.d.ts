import React from 'react';

export interface LanFileDashedLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileDashedLineSolid: React.FC<LanFileDashedLineSolidProps>;
export default LanFileDashedLineSolid;
