import React from 'react';

export interface LanTrashCanListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanList: React.FC<LanTrashCanListProps>;
export default LanTrashCanList;
