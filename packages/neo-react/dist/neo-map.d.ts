import React from 'react';

export interface NeoMapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMap(props: NeoMapProps): React.ReactElement;
export default NeoMap;
