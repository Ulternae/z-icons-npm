import React from 'react';

export interface LanFaceDroolingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDroolingThin(props: LanFaceDroolingThinProps): React.ReactElement;
export default LanFaceDroolingThin;
