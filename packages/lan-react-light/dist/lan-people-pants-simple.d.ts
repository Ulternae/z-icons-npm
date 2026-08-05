import React from 'react';

export interface LanPeoplePantsSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeoplePantsSimple(props: LanPeoplePantsSimpleProps): React.ReactElement;
export default LanPeoplePantsSimple;
