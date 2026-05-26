import React from 'react';

export interface LanTrashCanCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanCheck: React.FC<LanTrashCanCheckProps>;
export default LanTrashCanCheck;
