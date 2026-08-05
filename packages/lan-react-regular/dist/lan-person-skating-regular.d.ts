import React from 'react';

export interface LanPersonSkatingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSkatingRegular(props: LanPersonSkatingRegularProps): React.ReactElement;
export default LanPersonSkatingRegular;
