import React from 'react';

export interface LanTrashXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashXmarkThin: React.FC<LanTrashXmarkThinProps>;
export default LanTrashXmarkThin;
