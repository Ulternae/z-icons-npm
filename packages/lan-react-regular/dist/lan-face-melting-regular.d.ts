import React from 'react';

export interface LanFaceMeltingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMeltingRegular(props: LanFaceMeltingRegularProps): React.ReactElement;
export default LanFaceMeltingRegular;
