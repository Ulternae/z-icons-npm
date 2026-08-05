import React from 'react';

export interface LanAlienRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlienRegular(props: LanAlienRegularProps): React.ReactElement;
export default LanAlienRegular;
