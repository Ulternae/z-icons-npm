import React from 'react';

export interface LanWaffleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaffleSolid(props: LanWaffleSolidProps): React.ReactElement;
export default LanWaffleSolid;
