import React from 'react';

export interface LanMagnetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMagnetRegular(props: LanMagnetRegularProps): React.ReactElement;
export default LanMagnetRegular;
