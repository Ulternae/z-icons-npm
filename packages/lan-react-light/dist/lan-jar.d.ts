import React from 'react';

export interface LanJarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJar(props: LanJarProps): React.ReactElement;
export default LanJar;
