import React from 'react';

export interface MinaBrandFigmaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandFigmaSolid: React.FC<MinaBrandFigmaSolidProps>;
export default MinaBrandFigmaSolid;
