import React from 'react';

export interface CoreSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSun(props: CoreSunProps): React.ReactElement;
export default CoreSun;
