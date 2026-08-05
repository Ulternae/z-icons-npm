import React from 'react';

export interface LanGavelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGavel(props: LanGavelProps): React.ReactElement;
export default LanGavel;
