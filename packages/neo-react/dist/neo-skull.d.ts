import React from 'react';

export interface NeoSkullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSkull(props: NeoSkullProps): React.ReactElement;
export default NeoSkull;
