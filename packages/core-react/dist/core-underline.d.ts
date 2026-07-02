import React from 'react';

export interface CoreUnderlineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUnderline(props: CoreUnderlineProps): React.ReactElement;
export default CoreUnderline;
