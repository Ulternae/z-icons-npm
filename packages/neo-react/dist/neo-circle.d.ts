import React from 'react';

export interface NeoCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircle(props: NeoCircleProps): React.ReactElement;
export default NeoCircle;
