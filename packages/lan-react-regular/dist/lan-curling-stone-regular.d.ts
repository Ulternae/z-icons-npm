import React from 'react';

export interface LanCurlingStoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCurlingStoneRegular(props: LanCurlingStoneRegularProps): React.ReactElement;
export default LanCurlingStoneRegular;
