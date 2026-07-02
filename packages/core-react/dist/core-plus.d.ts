import React from 'react';

export interface CorePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePlus(props: CorePlusProps): React.ReactElement;
export default CorePlus;
