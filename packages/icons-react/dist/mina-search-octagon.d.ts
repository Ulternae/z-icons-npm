import React from 'react';

export interface MinaSearchOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchOctagon: React.FC<MinaSearchOctagonProps>;
export default MinaSearchOctagon;
