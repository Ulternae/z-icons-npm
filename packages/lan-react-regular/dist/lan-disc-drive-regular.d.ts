import React from 'react';

export interface LanDiscDriveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiscDriveRegular(props: LanDiscDriveRegularProps): React.ReactElement;
export default LanDiscDriveRegular;
