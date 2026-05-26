import React from 'react';

export interface LanTrashCanPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanPlus: React.FC<LanTrashCanPlusProps>;
export default LanTrashCanPlus;
