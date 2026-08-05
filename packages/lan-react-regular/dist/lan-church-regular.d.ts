import React from 'react';

export interface LanChurchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChurchRegular(props: LanChurchRegularProps): React.ReactElement;
export default LanChurchRegular;
