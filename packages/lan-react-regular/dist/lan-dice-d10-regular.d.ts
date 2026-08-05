import React from 'react';

export interface LanDiceD10RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD10Regular(props: LanDiceD10RegularProps): React.ReactElement;
export default LanDiceD10Regular;
