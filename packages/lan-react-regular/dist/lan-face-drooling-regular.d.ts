import React from 'react';

export interface LanFaceDroolingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDroolingRegular(props: LanFaceDroolingRegularProps): React.ReactElement;
export default LanFaceDroolingRegular;
