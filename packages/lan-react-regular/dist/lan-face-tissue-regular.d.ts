import React from 'react';

export interface LanFaceTissueRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceTissueRegular(props: LanFaceTissueRegularProps): React.ReactElement;
export default LanFaceTissueRegular;
