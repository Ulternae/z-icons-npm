import React from 'react';

export interface LanGridVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridVertical(props: LanGridVerticalProps): React.ReactElement;
export default LanGridVertical;
