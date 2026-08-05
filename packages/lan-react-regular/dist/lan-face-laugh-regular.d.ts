import React from 'react';

export interface LanFaceLaughRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceLaughRegular(props: LanFaceLaughRegularProps): React.ReactElement;
export default LanFaceLaughRegular;
