import React from 'react';

export interface LanAeropressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAeropressRegular(props: LanAeropressRegularProps): React.ReactElement;
export default LanAeropressRegular;
