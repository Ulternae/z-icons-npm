import React from 'react';

export interface CoreNotdefProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreNotdef(props: CoreNotdefProps): React.ReactElement;
export default CoreNotdef;
