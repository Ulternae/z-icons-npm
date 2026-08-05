import React from 'react';

export interface NeoCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircleCheck(props: NeoCircleCheckProps): React.ReactElement;
export default NeoCircleCheck;
