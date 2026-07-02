import React from 'react';

export interface CoreMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMoon(props: CoreMoonProps): React.ReactElement;
export default CoreMoon;
