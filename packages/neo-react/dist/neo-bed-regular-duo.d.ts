import React from 'react';

export interface NeoBedRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBedRegularDuo(props: NeoBedRegularDuoProps): React.ReactElement;
export default NeoBedRegularDuo;
