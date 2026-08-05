import React from 'react';

export interface LanFaceFrownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceFrownRegular(props: LanFaceFrownRegularProps): React.ReactElement;
export default LanFaceFrownRegular;
