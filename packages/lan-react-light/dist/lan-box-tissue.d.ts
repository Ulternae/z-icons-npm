import React from 'react';

export interface LanBoxTissueProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxTissue(props: LanBoxTissueProps): React.ReactElement;
export default LanBoxTissue;
