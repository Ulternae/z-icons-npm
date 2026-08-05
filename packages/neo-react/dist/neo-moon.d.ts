import React from 'react';

export interface NeoMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMoon(props: NeoMoonProps): React.ReactElement;
export default NeoMoon;
