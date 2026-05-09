import React from 'react';

export interface MinaColumnsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaColumns: React.FC<MinaColumnsProps>;
export default MinaColumns;
