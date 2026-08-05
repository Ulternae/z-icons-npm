import React from 'react';

export interface LanTeethOpenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTeethOpenRegular(props: LanTeethOpenRegularProps): React.ReactElement;
export default LanTeethOpenRegular;
