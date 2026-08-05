import React from 'react';

export interface NeoCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCirclePlus(props: NeoCirclePlusProps): React.ReactElement;
export default NeoCirclePlus;
