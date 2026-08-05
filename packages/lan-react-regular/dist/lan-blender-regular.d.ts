import React from 'react';

export interface LanBlenderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlenderRegular(props: LanBlenderRegularProps): React.ReactElement;
export default LanBlenderRegular;
