import React from 'react';

export interface MinaLetterCProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterC: React.FC<MinaLetterCProps>;
export default MinaLetterC;
