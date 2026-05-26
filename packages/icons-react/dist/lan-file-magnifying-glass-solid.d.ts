import React from 'react';

export interface LanFileMagnifyingGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMagnifyingGlassSolid: React.FC<LanFileMagnifyingGlassSolidProps>;
export default LanFileMagnifyingGlassSolid;
