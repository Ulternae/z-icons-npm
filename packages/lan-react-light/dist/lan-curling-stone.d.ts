import React from 'react';

export interface LanCurlingStoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCurlingStone(props: LanCurlingStoneProps): React.ReactElement;
export default LanCurlingStone;
