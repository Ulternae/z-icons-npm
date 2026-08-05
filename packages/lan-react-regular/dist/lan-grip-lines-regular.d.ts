import React from 'react';

export interface LanGripLinesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGripLinesRegular(props: LanGripLinesRegularProps): React.ReactElement;
export default LanGripLinesRegular;
