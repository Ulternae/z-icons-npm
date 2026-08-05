import React from 'react';

export interface LanFaceTissueProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceTissue(props: LanFaceTissueProps): React.ReactElement;
export default LanFaceTissue;
