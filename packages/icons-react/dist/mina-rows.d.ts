import React from 'react';

export interface MinaRowsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRows: React.FC<MinaRowsProps>;
export default MinaRows;
