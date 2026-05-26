import React from 'react';

export interface LanTrashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrash: React.FC<LanTrashProps>;
export default LanTrash;
