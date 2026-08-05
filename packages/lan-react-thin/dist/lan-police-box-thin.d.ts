import React from 'react';

export interface LanPoliceBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPoliceBoxThin(props: LanPoliceBoxThinProps): React.ReactElement;
export default LanPoliceBoxThin;
