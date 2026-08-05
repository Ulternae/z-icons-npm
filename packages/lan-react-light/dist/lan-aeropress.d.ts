import React from 'react';

export interface LanAeropressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAeropress(props: LanAeropressProps): React.ReactElement;
export default LanAeropress;
