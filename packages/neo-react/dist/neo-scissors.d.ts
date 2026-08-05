import React from 'react';

export interface NeoScissorsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoScissors(props: NeoScissorsProps): React.ReactElement;
export default NeoScissors;
