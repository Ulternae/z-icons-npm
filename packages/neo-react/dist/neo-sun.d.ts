import React from 'react';

export interface NeoSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSun(props: NeoSunProps): React.ReactElement;
export default NeoSun;
