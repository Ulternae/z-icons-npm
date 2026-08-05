import React from 'react';

export interface NeoBellRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBellRegularDuo(props: NeoBellRegularDuoProps): React.ReactElement;
export default NeoBellRegularDuo;
