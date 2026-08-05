import React from 'react';

export interface LanDollyBoxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDollyBoxRegular(props: LanDollyBoxRegularProps): React.ReactElement;
export default LanDollyBoxRegular;
