import React from 'react';

export interface LanTrashListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashList: React.FC<LanTrashListProps>;
export default LanTrashList;
