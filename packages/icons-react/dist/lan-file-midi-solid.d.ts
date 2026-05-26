import React from 'react';

export interface LanFileMidiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMidiSolid: React.FC<LanFileMidiSolidProps>;
export default LanFileMidiSolid;
