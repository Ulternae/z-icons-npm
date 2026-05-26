import React from 'react';

export interface LanBoxArchiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxArchiveSolid: React.FC<LanBoxArchiveSolidProps>;
export default LanBoxArchiveSolid;
