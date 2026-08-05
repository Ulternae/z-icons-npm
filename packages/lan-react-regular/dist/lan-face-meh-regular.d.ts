import React from 'react';

export interface LanFaceMehRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMehRegular(props: LanFaceMehRegularProps): React.ReactElement;
export default LanFaceMehRegular;
