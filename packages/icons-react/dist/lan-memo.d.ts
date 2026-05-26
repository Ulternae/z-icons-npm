import React from 'react';

export interface LanMemoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemo: React.FC<LanMemoProps>;
export default LanMemo;
