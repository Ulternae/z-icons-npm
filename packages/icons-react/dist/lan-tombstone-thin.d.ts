import React from 'react';

export interface LanTombstoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTombstoneThin: React.FC<LanTombstoneThinProps>;
export default LanTombstoneThin;
