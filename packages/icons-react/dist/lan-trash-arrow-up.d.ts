import React from 'react';

export interface LanTrashArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashArrowUp: React.FC<LanTrashArrowUpProps>;
export default LanTrashArrowUp;
