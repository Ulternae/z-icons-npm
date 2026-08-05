import React from 'react';

export interface LanFaceCloudsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceCloudsRegular(props: LanFaceCloudsRegularProps): React.ReactElement;
export default LanFaceCloudsRegular;
