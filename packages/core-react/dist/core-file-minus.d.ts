import React from 'react';

export interface CoreFileMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFileMinus(props: CoreFileMinusProps): React.ReactElement;
export default CoreFileMinus;
