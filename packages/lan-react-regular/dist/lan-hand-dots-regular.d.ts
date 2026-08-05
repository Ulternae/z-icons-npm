import React from 'react';

export interface LanHandDotsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandDotsRegular(props: LanHandDotsRegularProps): React.ReactElement;
export default LanHandDotsRegular;
