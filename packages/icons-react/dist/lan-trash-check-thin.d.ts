import React from 'react';

export interface LanTrashCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCheckThin: React.FC<LanTrashCheckThinProps>;
export default LanTrashCheckThin;
