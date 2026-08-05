import React from 'react';

export interface LanDownRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownRight(props: LanDownRightProps): React.ReactElement;
export default LanDownRight;
