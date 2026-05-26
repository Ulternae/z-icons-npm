import React from 'react';

export interface LanTrashCanListThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanListThin: React.FC<LanTrashCanListThinProps>;
export default LanTrashCanListThin;
