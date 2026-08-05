import React from 'react';

export interface LanObjectsColumnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectsColumnRegular(props: LanObjectsColumnRegularProps): React.ReactElement;
export default LanObjectsColumnRegular;
