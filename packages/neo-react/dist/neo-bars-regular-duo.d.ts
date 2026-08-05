import React from 'react';

export interface NeoBarsRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBarsRegularDuo(props: NeoBarsRegularDuoProps): React.ReactElement;
export default NeoBarsRegularDuo;
