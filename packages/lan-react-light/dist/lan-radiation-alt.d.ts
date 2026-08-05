import React from 'react';

export interface LanRadiationAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRadiationAlt(props: LanRadiationAltProps): React.ReactElement;
export default LanRadiationAlt;
