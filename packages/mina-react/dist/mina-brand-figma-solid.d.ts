import React from 'react';

export interface MinaBrandFigmaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandFigmaSolid(props: MinaBrandFigmaSolidProps): React.ReactElement;
export default MinaBrandFigmaSolid;
