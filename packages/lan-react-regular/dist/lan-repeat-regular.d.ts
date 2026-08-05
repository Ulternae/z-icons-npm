import React from 'react';

export interface LanRepeatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRepeatRegular(props: LanRepeatRegularProps): React.ReactElement;
export default LanRepeatRegular;
