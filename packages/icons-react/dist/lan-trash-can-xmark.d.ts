import React from 'react';

export interface LanTrashCanXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanXmark: React.FC<LanTrashCanXmarkProps>;
export default LanTrashCanXmark;
