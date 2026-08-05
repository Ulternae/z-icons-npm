import React from 'react';

export interface LanFileAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileAltRegular(props: LanFileAltRegularProps): React.ReactElement;
export default LanFileAltRegular;
