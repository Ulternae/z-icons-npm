import React from 'react';

export interface MinaMapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMap(props: MinaMapProps): React.ReactElement;
export default MinaMap;
