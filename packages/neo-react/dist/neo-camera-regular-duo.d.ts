import React from 'react';

export interface NeoCameraRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCameraRegularDuo(props: NeoCameraRegularDuoProps): React.ReactElement;
export default NeoCameraRegularDuo;
