import React from 'react';

export interface NeoLocationDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLocationDot(props: NeoLocationDotProps): React.ReactElement;
export default NeoLocationDot;
