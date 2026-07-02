import React from 'react';

export interface CoreGrid2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGrid2(props: CoreGrid2Props): React.ReactElement;
export default CoreGrid2;
