import React from 'react';

export interface LanRadiationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRadiation(props: LanRadiationProps): React.ReactElement;
export default LanRadiation;
