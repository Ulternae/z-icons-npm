import React from 'react';

export interface LanAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAltRegular(props: LanAltRegularProps): React.ReactElement;
export default LanAltRegular;
