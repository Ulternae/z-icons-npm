import React from 'react';

export interface LanMouseFieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMouseField(props: LanMouseFieldProps): React.ReactElement;
export default LanMouseField;
