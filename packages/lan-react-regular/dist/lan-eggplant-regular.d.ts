import React from 'react';

export interface LanEggplantRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEggplantRegular(props: LanEggplantRegularProps): React.ReactElement;
export default LanEggplantRegular;
