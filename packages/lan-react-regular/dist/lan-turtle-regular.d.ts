import React from 'react';

export interface LanTurtleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTurtleRegular(props: LanTurtleRegularProps): React.ReactElement;
export default LanTurtleRegular;
