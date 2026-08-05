import React from 'react';

export interface LanTextWidthRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextWidthRegular(props: LanTextWidthRegularProps): React.ReactElement;
export default LanTextWidthRegular;
