import React from 'react';

export interface LanMaskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaskRegular(props: LanMaskRegularProps): React.ReactElement;
export default LanMaskRegular;
