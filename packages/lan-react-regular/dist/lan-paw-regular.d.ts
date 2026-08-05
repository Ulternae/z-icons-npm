import React from 'react';

export interface LanPawRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPawRegular(props: LanPawRegularProps): React.ReactElement;
export default LanPawRegular;
