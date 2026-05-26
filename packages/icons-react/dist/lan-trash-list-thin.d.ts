import React from 'react';

export interface LanTrashListThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashListThin: React.FC<LanTrashListThinProps>;
export default LanTrashListThin;
