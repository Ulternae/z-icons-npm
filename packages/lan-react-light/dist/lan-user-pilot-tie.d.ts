import React from 'react';

export interface LanUserPilotTieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserPilotTie(props: LanUserPilotTieProps): React.ReactElement;
export default LanUserPilotTie;
