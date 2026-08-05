import React from 'react';

export interface LanFireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireRegular(props: LanFireRegularProps): React.ReactElement;
export default LanFireRegular;
