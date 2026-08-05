import React from 'react';

export interface LanScrollOldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrollOldRegular(props: LanScrollOldRegularProps): React.ReactElement;
export default LanScrollOldRegular;
