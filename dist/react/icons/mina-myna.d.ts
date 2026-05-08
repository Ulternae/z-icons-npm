import React from 'react';

export interface MinaMynaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMyna: React.FC<MinaMynaProps>;
export default MinaMyna;
