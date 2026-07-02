import React from 'react';

export interface CoreBarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBars(props: CoreBarsProps): React.ReactElement;
export default CoreBars;
