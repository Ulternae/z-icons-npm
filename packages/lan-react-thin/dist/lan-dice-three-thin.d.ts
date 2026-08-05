import React from 'react';

export interface LanDiceThreeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceThreeThin(props: LanDiceThreeThinProps): React.ReactElement;
export default LanDiceThreeThin;
