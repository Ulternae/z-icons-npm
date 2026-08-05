import React from 'react';

export interface NeoCompressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCompress(props: NeoCompressProps): React.ReactElement;
export default NeoCompress;
