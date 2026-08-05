import React from 'react';

export interface LanCitrusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCitrusRegular(props: LanCitrusRegularProps): React.ReactElement;
export default LanCitrusRegular;
