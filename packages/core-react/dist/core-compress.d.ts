import React from 'react';

export interface CoreCompressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCompress(props: CoreCompressProps): React.ReactElement;
export default CoreCompress;
