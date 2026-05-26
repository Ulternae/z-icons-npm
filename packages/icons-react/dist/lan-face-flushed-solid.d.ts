import React from 'react';

export interface LanFaceFlushedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceFlushedSolid: React.FC<LanFaceFlushedSolidProps>;
export default LanFaceFlushedSolid;
