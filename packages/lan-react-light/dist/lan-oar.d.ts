import React from 'react';

export interface LanOarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOar(props: LanOarProps): React.ReactElement;
export default LanOar;
