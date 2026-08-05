import React from 'react';

export interface LanRadiationRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRadiationRegular(props: LanRadiationRegularProps): React.ReactElement;
export default LanRadiationRegular;
