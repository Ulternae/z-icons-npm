import React from 'react';

export interface BruJavaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruJava(props: BruJavaProps): React.ReactElement;
export default BruJava;
