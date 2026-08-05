import React from 'react';

export interface NeoEqualsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoEquals(props: NeoEqualsProps): React.ReactElement;
export default NeoEquals;
