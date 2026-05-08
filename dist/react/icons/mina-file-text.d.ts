import React from 'react';

export interface MinaFileTextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFileText: React.FC<MinaFileTextProps>;
export default MinaFileText;
