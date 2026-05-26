import React from 'react';

export interface LanTombstoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTombstone: React.FC<LanTombstoneProps>;
export default LanTombstone;
