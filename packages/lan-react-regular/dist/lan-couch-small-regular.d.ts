import React from 'react';

export interface LanCouchSmallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCouchSmallRegular(props: LanCouchSmallRegularProps): React.ReactElement;
export default LanCouchSmallRegular;
