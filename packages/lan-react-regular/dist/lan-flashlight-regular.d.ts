import React from 'react';

export interface LanFlashlightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlashlightRegular(props: LanFlashlightRegularProps): React.ReactElement;
export default LanFlashlightRegular;
