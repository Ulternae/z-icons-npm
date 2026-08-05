import React from 'react';

export interface NeoBombRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBombRegularDuo(props: NeoBombRegularDuoProps): React.ReactElement;
export default NeoBombRegularDuo;
