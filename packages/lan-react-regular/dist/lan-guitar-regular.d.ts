import React from 'react';

export interface LanGuitarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGuitarRegular(props: LanGuitarRegularProps): React.ReactElement;
export default LanGuitarRegular;
