import React from 'react';

export interface LanCannonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCannonRegular(props: LanCannonRegularProps): React.ReactElement;
export default LanCannonRegular;
