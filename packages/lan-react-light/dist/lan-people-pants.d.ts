import React from 'react';

export interface LanPeoplePantsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeoplePants(props: LanPeoplePantsProps): React.ReactElement;
export default LanPeoplePants;
