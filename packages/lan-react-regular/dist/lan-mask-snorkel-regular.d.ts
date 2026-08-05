import React from 'react';

export interface LanMaskSnorkelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaskSnorkelRegular(props: LanMaskSnorkelRegularProps): React.ReactElement;
export default LanMaskSnorkelRegular;
