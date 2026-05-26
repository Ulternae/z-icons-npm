import React from 'react';

export interface LanTrashCanCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanCheckThin: React.FC<LanTrashCanCheckThinProps>;
export default LanTrashCanCheckThin;
