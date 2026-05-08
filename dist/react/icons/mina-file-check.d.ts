import React from 'react';

export interface MinaFileCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFileCheck: React.FC<MinaFileCheckProps>;
export default MinaFileCheck;
