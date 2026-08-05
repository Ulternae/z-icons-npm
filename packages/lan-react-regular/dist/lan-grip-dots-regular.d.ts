import React from 'react';

export interface LanGripDotsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGripDotsRegular(props: LanGripDotsRegularProps): React.ReactElement;
export default LanGripDotsRegular;
