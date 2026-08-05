import React from 'react';

export interface LanTreeAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeAltRegular(props: LanTreeAltRegularProps): React.ReactElement;
export default LanTreeAltRegular;
