import React from 'react';

export interface NeoLocationArrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLocationArrow(props: NeoLocationArrowProps): React.ReactElement;
export default NeoLocationArrow;
