import React from 'react';

export interface NeoNotdefProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoNotdef(props: NeoNotdefProps): React.ReactElement;
export default NeoNotdef;
