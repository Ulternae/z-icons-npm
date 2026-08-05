import React from 'react';

export interface LanBookLawRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookLawRegular(props: LanBookLawRegularProps): React.ReactElement;
export default LanBookLawRegular;
