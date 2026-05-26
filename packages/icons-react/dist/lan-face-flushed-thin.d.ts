import React from 'react';

export interface LanFaceFlushedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceFlushedThin: React.FC<LanFaceFlushedThinProps>;
export default LanFaceFlushedThin;
