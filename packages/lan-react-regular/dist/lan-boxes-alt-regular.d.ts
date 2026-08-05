import React from 'react';

export interface LanBoxesAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxesAltRegular(props: LanBoxesAltRegularProps): React.ReactElement;
export default LanBoxesAltRegular;
