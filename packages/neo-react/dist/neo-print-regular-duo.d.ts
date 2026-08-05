import React from 'react';

export interface NeoPrintRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPrintRegularDuo(props: NeoPrintRegularDuoProps): React.ReactElement;
export default NeoPrintRegularDuo;
