import React from 'react';

export interface LanTrashCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCheck: React.FC<LanTrashCheckProps>;
export default LanTrashCheck;
