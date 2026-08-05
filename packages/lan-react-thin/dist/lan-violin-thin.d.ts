import React from 'react';

export interface LanViolinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanViolinThin(props: LanViolinThinProps): React.ReactElement;
export default LanViolinThin;
