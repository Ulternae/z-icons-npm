import React from 'react';

export interface CoreCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCode(props: CoreCodeProps): React.ReactElement;
export default CoreCode;
