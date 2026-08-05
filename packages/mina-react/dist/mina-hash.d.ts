import React from 'react';

export interface MinaHashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHash(props: MinaHashProps): React.ReactElement;
export default MinaHash;
