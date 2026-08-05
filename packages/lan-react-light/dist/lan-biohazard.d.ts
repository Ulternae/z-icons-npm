import React from 'react';

export interface LanBiohazardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBiohazard(props: LanBiohazardProps): React.ReactElement;
export default LanBiohazard;
