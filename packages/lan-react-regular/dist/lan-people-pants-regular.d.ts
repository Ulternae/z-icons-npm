import React from 'react';

export interface LanPeoplePantsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeoplePantsRegular(props: LanPeoplePantsRegularProps): React.ReactElement;
export default LanPeoplePantsRegular;
