import React from 'react';

export interface NeoBoltRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBoltRegularDuo(props: NeoBoltRegularDuoProps): React.ReactElement;
export default NeoBoltRegularDuo;
