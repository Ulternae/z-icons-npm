import React from 'react';

export interface LanWormRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWormRegular(props: LanWormRegularProps): React.ReactElement;
export default LanWormRegular;
