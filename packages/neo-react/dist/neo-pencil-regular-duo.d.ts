import React from 'react';

export interface NeoPencilRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPencilRegularDuo(props: NeoPencilRegularDuoProps): React.ReactElement;
export default NeoPencilRegularDuo;
