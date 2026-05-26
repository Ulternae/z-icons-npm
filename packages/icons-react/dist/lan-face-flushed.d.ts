import React from 'react';

export interface LanFaceFlushedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceFlushed: React.FC<LanFaceFlushedProps>;
export default LanFaceFlushed;
