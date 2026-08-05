import React from 'react';

export interface LanUserBountyHunterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserBountyHunter(props: LanUserBountyHunterProps): React.ReactElement;
export default LanUserBountyHunter;
