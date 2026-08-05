import React from 'react';

export interface LanMandolinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMandolin(props: LanMandolinProps): React.ReactElement;
export default LanMandolin;
