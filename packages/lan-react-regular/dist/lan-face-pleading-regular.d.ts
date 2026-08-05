import React from 'react';

export interface LanFacePleadingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePleadingRegular(props: LanFacePleadingRegularProps): React.ReactElement;
export default LanFacePleadingRegular;
