import React from 'react';

export interface LanBoxTissueRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxTissueRegular(props: LanBoxTissueRegularProps): React.ReactElement;
export default LanBoxTissueRegular;
