import React from 'react';

export interface LanFaceSurpriseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSurprise(props: LanFaceSurpriseProps): React.ReactElement;
export default LanFaceSurprise;
