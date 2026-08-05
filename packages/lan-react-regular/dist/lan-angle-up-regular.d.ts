import React from 'react';

export interface LanAngleUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngleUpRegular(props: LanAngleUpRegularProps): React.ReactElement;
export default LanAngleUpRegular;
