import React from 'react';

export interface LanDiceOneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceOneThin(props: LanDiceOneThinProps): React.ReactElement;
export default LanDiceOneThin;
