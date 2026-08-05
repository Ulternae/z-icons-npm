import React from 'react';

export interface LanGolfFlagHoleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGolfFlagHoleRegular(props: LanGolfFlagHoleRegularProps): React.ReactElement;
export default LanGolfFlagHoleRegular;
