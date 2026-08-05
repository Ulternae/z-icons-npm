import React from 'react';

export interface LanMoonStarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonStarsRegular(props: LanMoonStarsRegularProps): React.ReactElement;
export default LanMoonStarsRegular;
