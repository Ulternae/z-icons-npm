import React from 'react';

export interface LanFaceLaughWinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceLaughWink: React.FC<LanFaceLaughWinkProps>;
export default LanFaceLaughWink;
