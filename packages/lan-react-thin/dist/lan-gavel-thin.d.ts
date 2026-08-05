import React from 'react';

export interface LanGavelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGavelThin(props: LanGavelThinProps): React.ReactElement;
export default LanGavelThin;
