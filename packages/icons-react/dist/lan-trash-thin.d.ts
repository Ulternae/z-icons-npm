import React from 'react';

export interface LanTrashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashThin: React.FC<LanTrashThinProps>;
export default LanTrashThin;
