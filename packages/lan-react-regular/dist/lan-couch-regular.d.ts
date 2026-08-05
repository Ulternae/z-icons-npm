import React from 'react';

export interface LanCouchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCouchRegular(props: LanCouchRegularProps): React.ReactElement;
export default LanCouchRegular;
