import React from 'react';

export interface LanFileMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMagnifyingGlass: React.FC<LanFileMagnifyingGlassProps>;
export default LanFileMagnifyingGlass;
