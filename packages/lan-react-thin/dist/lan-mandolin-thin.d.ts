import React from 'react';

export interface LanMandolinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMandolinThin(props: LanMandolinThinProps): React.ReactElement;
export default LanMandolinThin;
