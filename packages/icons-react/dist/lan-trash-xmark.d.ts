import React from 'react';

export interface LanTrashXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashXmark: React.FC<LanTrashXmarkProps>;
export default LanTrashXmark;
