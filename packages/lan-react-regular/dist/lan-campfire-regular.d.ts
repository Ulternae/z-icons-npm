import React from 'react';

export interface LanCampfireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCampfireRegular(props: LanCampfireRegularProps): React.ReactElement;
export default LanCampfireRegular;
