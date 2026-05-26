import React from 'react';

export interface LanCartXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartXmark: React.FC<LanCartXmarkProps>;
export default LanCartXmark;
