import React from 'react';

export interface MinaFileMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFileMinus: React.FC<MinaFileMinusProps>;
export default MinaFileMinus;
