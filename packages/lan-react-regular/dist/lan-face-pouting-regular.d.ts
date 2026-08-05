import React from 'react';

export interface LanFacePoutingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePoutingRegular(props: LanFacePoutingRegularProps): React.ReactElement;
export default LanFacePoutingRegular;
